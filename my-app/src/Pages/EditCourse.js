import React, { useEffect, useState } from 'react';
import '../style.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

const curUser = JSON.parse(window.localStorage.getItem('curUser'));

const EditCourse = () => {
    const {name} = useParams();
    console.log(name)

    const navigate = useNavigate();

    useEffect(() => {
        if (curUser === null){
            navigate("/")
        }
    },[])

    console.log(localStorage.getItem("curUser"))

    const [course, setCourse]= useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/course/Course`, {
        // fetch(`http://localhost:5000/course/${name}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        }).then((data) => {
            // const getcourse = data;
            // document.getElementById('name').value = getcourse.name;
            // document.getElementById('theme').value = getcourse.theme;
            // document.getElementById('details').value = getcourse.details;
            // document.getElementById('id_teacher').value = getcourse.id_teacher;
            console.log(course);
        })
    }, [])

    const handleSubmit = event => {
        event.preventDefault()

        const user = {
            name: document.getElementById('name').value,
            theme: document.getElementById('theme').value,
            details: document.getElementById('details').value,
            id_teacher: document.getElementById('id_teacher').value
        };

        fetch(`http://localhost:5000/course/Course`, {
        // fetch(`http://localhost:5000/course/${name}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'ANYTHING_WILL_WORK_HERE',
            },
        }).then(async (response) => {
            if (!response.ok) {
                throw response.status;
            }
            navigate("/mycourses");
            return response.json();
        })
            .catch((err) => {
                alert(err);
            });
    }

    return(
        <form name="form" className="sign">
            <div className="container">
                <h1><span>Edit Course</span></h1>

                <hr />
                <b>Name</b>
                <input type="text" id="name" className="field" required minLength="3" />

                <b>Theme</b>
                <input type="text" id="theme" className="field" required minLength="3" />

                <b>Details</b>
                <input type="text" id="details" className="field" required minLength="3" />

                <b>Teacher Username</b>
                <input type="text" id="id_teacher" className="field" required minLength="3" />

                <hr />
                <button data-testid="btn" onClick={handleSubmit} type="submit" className="save_btn" id="save_btn">Save changes</button>
                <Link to ="/mycourses" className="back_btn" id="back_btn">Back to My Course</Link>
            </div>
        </form>
    )
}

export default EditCourse;
