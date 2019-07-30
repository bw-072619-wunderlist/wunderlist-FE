import React from 'react';

export default ({ completed, title }) => {

    return (
        <li>
            <button
                className={
                    completed ? 'checkbox checked' : 'checkbox unchecked'
                    }
            >checkbox</button>
            <p>{title}</p>
            <img src='' alt='calIcon' />
            <button>X</button>
        </li>
    )
}