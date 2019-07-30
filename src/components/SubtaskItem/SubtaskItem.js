import React from 'react';

export default ({ completed, name }) => {

    return (
        <li>
            <div className={
                completed ? 'checkbox checked' : 'checkbox unchecked'
            }><i className="fas fa-check fa-sm"></i></div>
            <p>{name}</p>
            <div className='cal-icon'>
                <i class="far fa-calendar fa-lg"></i>
            </div>
            <div className='del-icon'>
                <i className="fas fa-times fa-lg"></i>
            </div>
        </li>
    )
}