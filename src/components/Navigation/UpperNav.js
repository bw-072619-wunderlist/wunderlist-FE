import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './upperNav.scss';


export default function NavBar(props) {

    return (
        <div className="Nav">
            <Link to="" className="Search">
                <Input placeholder='Search...' />
                <Icon className="searchIcon" name="search" size="large" />
            </Link>
            <div className="Navbar">
                <Link to="#" className="current">HOME</Link>
                <div className="addNav">
                    <Link to="#" className="addButton">+</Link>
                    <div className="addTask">Add a TASK</div>
                </div>
             </div>
        </div>
    )
};