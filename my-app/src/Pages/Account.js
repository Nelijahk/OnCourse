import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../style.css';

const curUser = JSON.parse(window.localStorage.getItem('curUser'));

const Account = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (curUser === null){
            navigate("/")
        }
    },[])

    // console.log(localStorage.getItem("curUser"))

    const [user, setUser]= useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user/karas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
            .then((data) => {
                // const getuser = data;
                // const firstname = document.getElementById('first_name');
                // firstname.appendChild(
                //     document.createTextNode("Ann"),
                //     // document.createTextNode(getuser.first_name),
                // );
                // const lastname = document.getElementById('last_name');
                // lastname.appendChild(
                //     document.createTextNode("Smith"),
                //     // document.createTextNode(getuser.last_name),
                // );
                // const username = document.getElementById('user_name');
                // username.appendChild(
                //     document.createTextNode("karas"),
                //     // document.createTextNode(getuser.user_name),
                // );
                // const email = document.getElementById('email');
                // email.appendChild(
                //     document.createTextNode("kara@gmail.com"),
                //     // document.createTextNode(getuser.email),
                // );
                // const status = document.getElementById('status');
                // status.appendChild(
                //     document.createTextNode("Teacher"),
                //     // document.createTextNode(getuser.status),
                // );
                console.log(user);
            })
    }, [])



    const handleDelete = async event =>{
        event.preventDefault();

        fetch(`http://localhost:5000/user/karas`, {
        // fetch(`http://localhost:5000/user/${curUser.user_name}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) {
                    throw response.status;
                }
                window.localStorage.clear();
                navigate("/");
                window.location.reload()

            })
            .catch((error) => {
                alert(error);
            });
    }

    return(
        <div className="account">
            <div className="contaiter">
                <h1><span>Personal information</span></h1>

                <hr />

                <p id="first_name"> First Name: </p>
                <p id="last_name"> Last Name: </p>
                <p id="user_name"> Username: </p>
                <p id="email"> Email: </p>
                <p id="status"> Status: </p>

                <hr />

                <div className="butt">
                    <Link to ="/edit" className="edit_btn" id="edit_btn">Edit</Link>
                    <button data-testid="btn" onClick={handleDelete} type="submit" className="del_btn" id="del_btn">Delete</button>
                    <Link to ="/mycourses" className="my_btn" id="my_btn">My Courses</Link>
                </div>
            </div>
        </div>
    )
}

export default Account
