import React, { useState, useEffect } from 'react'
import '../style.css';
import course1 from "../Images/course1.png";
import course2 from "../Images/course2.png";
import course3 from "../Images/course3.png";
import course4 from "../Images/course4.png";
import course5 from "../Images/course5.png";
import foto from "../Images/foto1.jpg";
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const curUser = JSON.parse(window.localStorage.getItem('curUser'));

const Home = () => {
    console.log(localStorage.getItem("curUser"))

    const [courses, setCourses]= useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/courses`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        }).then((data) => {
            setCourses(data.map((course) => course));
            console.log(courses);
        })
    }, []);

    return (
        <div>
            <div className="main">
                <img src={foto} className="foto" alt = "mainfoto"/>
                    <h1><span>It is never too late to learn something new</span></h1>
            </div>
            <h1><span>Most popular courses:</span></h1>
            <p className="popular">
                <div className="smth">
                    {courses.map((course) => (
                        <Link to={`/course/${course.name}`}>
                            <img src={course1} className="one" alt="courseLogo"/>
                            <p id="name"> Name: {course.name} </p>
                        </Link>
                    ))}
                </div>

                {/* <Link to="/course"></Link> */}
                {/* <a href="#"><img src={course2} className="two" alt="courseLogo"/></a> */}
                {/* <a href="#"><img src={course3} className="three" alt="courseLogo"/></a> */}
                {/* <a href="#"><img src={course4} className="four" alt="courseLogo"/></a> */}
                {/* <a href="#"><img src={course5} className="five" alt="courseLogo"/></a> */}
            </p>
            {curUser &&
                <Link to="/newcourse" className="add_btn"><FaPlusCircle></FaPlusCircle></Link>
            }
        </div>
    )
}

export default Home
