import React from 'react';
import SearchBar from './SearchBar'; // 确保正确导入 SearchBar 组件
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">Fish Info System</a>
            <div className="nav-links">
                <SearchBar />
                <a href="/" className="nav-link">Home</a>
                <div className="dropdown">
                    <button className="dropbtn">Area</button>
                    <div className="dropdown-content">
                        <a href="/area/english-bay">English Bay</a>
                        <a href="/area/fraser-river">Fraser River</a>
                        <a href="/area/stanley-park">Stanley Park</a>
                        <a href="/area/burnaby-lake">Burnaby Lake</a>
                        <a href="/area/capilano-river">Capilano River</a>
                        <a href="/area/burrard-inlet">Burrard Inlet</a>
                        <a href="/area/seymour-river">Seymour River</a>
                    </div>
                </div>
                <a href="/login" className="nav-link">Login</a>
                <a href="/register" className="nav-link">Register</a>
            </div>
        </nav>
    );
};

export default NavBar;
