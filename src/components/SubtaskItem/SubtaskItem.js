import React from 'react';

export default ({ completed, title }) => {

    return (
        <li>
            <button
                className={
                    completed ? 'checkbox checked' : 'checkbox unchecked'
                    }
            ></button>
            <p>{title}</p>
            <img src='../../assets/calendar-regular.svg' alt='calIcon' />
            <button style={{backgroundImage: '../../assets/calendar-regular.svg'}}></button>
        </li>
    )
}