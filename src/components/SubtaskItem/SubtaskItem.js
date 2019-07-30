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
            <img src='' alt='calIcon' />
            <button>X</button>
        </li>
    )
}