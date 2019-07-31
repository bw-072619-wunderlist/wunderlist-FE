import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './upperNav.scss';


export default function NavBar(props) {
    const [showSearch, setShowSearch] = useState(false);

    const handleChange = () => {
        setShowSearch(!showSearch);
    }

    return (
        <div className="Nav">
            <Link to="#" className="Search">
                <Input focus={showSearch} placeholder='Search...' />
                <Icon className="searchIcon" name="search" size="large" onClick={handleChange} />
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