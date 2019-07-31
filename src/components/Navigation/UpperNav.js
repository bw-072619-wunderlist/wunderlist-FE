import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Icon, Image, Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './upperNav.scss';


export default function NavBar(props) {

    return (
        <div className="Nav">
            <div className="Search"></div>
            <div className="Navbar">
                <div className="current">HOME</div>
                <div className="addButton"></div>

            
                <div className="addTask">Add a TASK</div>
             </div>
        </div>
    )
};