import React, { useEffect, useState } from "react";
import '../style.css';
import { Link, useParams } from 'react-router-dom';

const AboutTeacher = () => {
    const {name} = useParams();
    //console.log(name)

    const [user, setUser]= useState([]);

    useEffect(() => {
        console.log(user);
        fetch(`http://localhost:5000/course/teacher/karas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        }).then((data) => {
            // const getuser = data;
            // document.getElementById('first_name').value = getuser.first_name;
            // document.getElementById('last_name').value = getuser.last_name;
            // document.getElementById('user_name').value = getuser.user_name;
            // document.getElementById('email').value = getuser.email;
            // document.getElementById('status').value = getuser.status;
            console.log(user);
        })
    }, [])

    return (
        <form name="form" className="sign">
            <div className="container">
                <h1><span>Teacher Information</span></h1>

                <hr />
                <b>First name</b>
                <input type="text" value={user.first_name} id="first_name" placeholder="Enter first name" className="field" required minLength="3" />

                <b>Last name</b>
                <input type="text" value={user.last_name} id="last_name" placeholder="Enter last name" className="field" required minLength="3" />

                <b>Username</b>
                <input type="text" value={user.user_name} id="user_name" placeholder="Enter Username" className="field" required minLength="3" />

                <b>Email</b>
                <input type="text" value={user.email} id="email" placeholder="Enter Email" className="field" required minLength="3" />

                <hr />

                <Link to ="/mycourses" className="back_btn" id="back_btn">Back</Link>
            </div>
        </form>
    )
}

export default AboutTeacher;
