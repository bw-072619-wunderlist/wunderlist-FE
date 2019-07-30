import React from 'react';

export default ({ completed, title }) => {

    return (
        <li>
            <h1>hello world</h1>
            <p>{title.concat(completed ? " COMPLETED" : " PENDING")}</p>
        </li>
    )
}