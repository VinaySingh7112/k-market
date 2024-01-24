
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar1() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed bg-light w-100 z-3 ps-4 pe-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="logo.png" alt="" className='pe-lg-5' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to='/' className='navbar-brand text-decoration-none   align-items-center'style={{fontWeight:"bold",fontSize:"18px",color:'orange'}}>Home</NavLink>
                       </li>
                        <li className="nav-item">
                    <NavLink to='/' className='navbar-brand text-decoration-none  align-items-center 'style={{fontWeight:"bold",fontSize:"18px",color:'orange'}}>About</NavLink>
                        </li>
                        <li className="nav-item ">
                           <NavLink to='/' className='navbar-brand text-decoration-none   align-items-center 'style={{fontWeight:"bold",fontSize:"18px",color:'orange'}}>Contact</NavLink>
                      
                        </li>
                        
                    </ul>
                    <span className="bi bi-plus-lg text-dark me-3 navbar-brand"></span>
                    <span className="bi bi-question-circle text-dark me-3 navbar-brand"></span>
                        
                    <form className="d-flex position-relative" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light  position-absolute" type="submit" style={{right:'0'}}><span className='bi bi-search text-dark' ></span></button>
                         
                    </form>
                        <span className="bi bi-bell text-dark me-3 navbar-brand " style={{fontSize:'23px'}}></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar1;