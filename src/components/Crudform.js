import React, { useState, useReducer } from 'react'
import { initialState, reducer, update} from './reducer';

const 

function Crudform(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            //Generating random numbers within the 10000
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        //Setting an input to an empty string.
        setInput('');
    };


    return (
        <form onSubmit={handleSubmit} className="Crud-form">
            {props.edit ? (
                <>
                    <input
                    placeholder='Update your list'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='Edit'
                />
                <button onClick={ handleSubmit } className='Edit'>
                    Update
                </button>
                </>
            ) : (
                <>
            <input
            placeholder='Add' 
            value={input}
            onChange={handleChange}
            name='text'
            className='crud-input'
            ref = {inputRef}
            />
            <button className='crud-button'>Add to list</button>
            </>
            )}
        </form>
    );
}

export default Crudform;
