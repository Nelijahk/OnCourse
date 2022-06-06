import React , {useState} from 'react';
import logo from "../Images/Logo_light.png";
import "../style.css"
import { FaSearch } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [curUser, setCurUser] =  useState(JSON.parse(window.localStorage.getItem('curUser')));

    const setLogout = () => {
        setCurUser(null);
    };

    const navigate = useNavigate();

    const handleClick = event => {
        event.preventDefault();
        window.localStorage.clear();
        setLogout()
        navigate("/");
        window.location.reload();
    };

    return(
        <nav>
            <Link to="/" className="nav-link"><img src={logo} className="icon" alt="Home"></img></Link>
            <div className="dropdown">
                <button className="dropdown_btn">Categories</button>
                <div className="dropdown_content">
                    <a className="n av-link" href="#">Business</a>
                    <a className="nav-link" href="#">Development</a>
                    <a className="nav-link" href="#">Design</a>
                    <a className="nav-link" href="#">IT</a>
                    <a className="nav-link" href="#">Marketing</a>
                </div>
            </div>
            <form>
                <input type="text" placeholder="Search..."></input>
                <button type="submit"><FaSearch></FaSearch></button>
            </form>
            <button href="#" className="teacher">For teacher</button>
            <div className="regist">
                {curUser &&
                    <div>
                        <button onClick={handleClick} type="submit" className="logout_btn" id="logout_btn">Log out</button>
                        <Link to="/account" className="acc_btn" id="acc_btn">Account</Link>
                    </div>
                }

                {!curUser &&
                    <div>
                        <Link to ="/login" className="log_btn" id="log_btn">Log in</Link>
                        <Link to="/signup" className="sign_btn" id="sign_btn">Sign up</Link>
                    </div>
                }
            </div>

        </nav>
    )
}

export default Header;
