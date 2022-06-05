import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Account from './Pages/Account';
import Edit from './Pages/EditAccount';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <div className="maincontainer">
            <Router>
                <Header></Header>
                <Routes>
                    <Route exact path ='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/account' element={<Account />} />
                    <Route exact path='/edit' element={<Edit />} />
                </Routes>
                <hr></hr>
                <Footer></Footer>
            </Router>
        </div>
    )
  };
}
export default App;
