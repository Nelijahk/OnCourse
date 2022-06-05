import React, { useState } from 'react'
import '../style.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
import course1 from "../Images/course1.png";
import course2 from "../Images/course2.png";
import course3 from "../Images/course3.png";
import course4 from "../Images/course4.png";
import course5 from "../Images/course5.png";

const Home = () => {
    const [curUser, setCurUser] =  useState(JSON.parse(window.localStorage.getItem('curUser')));
    return (
        <div>
            <h1><span>Most popular courses:</span></h1>
            <p className="popular">
                <a href="#"><img src={course1} className="one" alt="courseLogo"/></a>
                <a href="#"><img src={course2} className="two" alt="courseLogo"/></a>
                <a href="#"><img src={course3} className="three" alt="courseLogo"/></a>
                <a href="#"><img src={course4} className="four" alt="courseLogo"/></a>
                <a href="#"><img src={course5} className="five" alt="courseLogo"/></a>
            </p>
        </div>
    )
}

export default Home
