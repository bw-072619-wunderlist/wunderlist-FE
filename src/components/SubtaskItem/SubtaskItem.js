import React from 'react';

export default ({ completed, title }) => {

    return (
        <li>
            <div className={
                completed ? 'checkbox checked' : 'checkbox unchecked'
            }><i class="fas fa-check fa-sm"></i></div>
            <p>{title}</p>
            <div className='cal-icon'>
                <i class="far fa-calendar fa-lg"></i>
            </div>
            <div className='del-icon'>
                <i class="fas fa-times fa-lg"></i>
            </div>
        </li>
    )
}