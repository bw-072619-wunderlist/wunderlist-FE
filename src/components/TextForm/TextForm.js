import React, { useState, useEffect } from 'react';

function Form({ submitFun, submitText, fields }) {
    const deflt = Object.fromEntries(fields.map(field => [field, '']));
    const [vals, setVals] = useState(deflt);

    function inputHandler({ target }) {
        setVals({...vals, [target.id]: target.value});
    }

    function add(ev) {
        ev.preventDefault();
        submitFun(vals);
        setVals(deflt);
    }

    return (
        <form onSubmit={add}>
            {vals && Object.keys(vals).map(field => (
                <label>
                    {vals[field] && <h2>{vals[field]}</h2>}
                    <input type='text' id={field} value={vals[field]} onChange={inputHandler} />
                </label>
            ))}
            <label>

            </label>
            <input type='submit' value={submitText} />
        </form>
    );

}

export default Form;