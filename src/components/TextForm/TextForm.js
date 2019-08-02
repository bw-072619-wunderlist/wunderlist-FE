import React, { useState } from 'react';

function Form({ submitFun, submitText, fields, labels=[], className }) {
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
        <form onSubmit={add} className={className}>
            {vals && fields.map((field, ix) => (
                <label>
                    {labels[ix] && <p>{labels[ix]}</p>}
                    <input type='text' id={field} value={vals[field]} onChange={inputHandler} />
                </label>
            ))}
            <label>

            </label>
            <input className='text-btn' type='submit' value={submitText} />
        </form>
    );

}

export default Form;