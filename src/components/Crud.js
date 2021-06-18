import React, { useState } from 'react';

const Crud = ({ crud, remove, edit }) => {
    const [mode, setMode] = useState("list");
    const [text, setText] = useState(crud.text);
    return (
        <div className="Crud">
            {mode === "list"
            ? <>
            <span className="CrudText">{crud.text}</span>
            <button className="RemoveCrud" onClick={remove}>Remove</button>
            <button className="EditCrud" onClick={() => setMode("edit")}>Edit</button>
        </>
        : <>
            <input value={text} onChange={e => setText(e.target.value)} className="EditCrudInput" />
            <button className="EditCrudSave" onClick={() => {edit(text); setMode("list");}}>Save</button>
            <button className="EditCrudCancel" onClick={() => setMode("list")}>Cancel</button>
        </>}
        </div>
    );
}

export default Crud;




























//import Crudform from './Crudform';
//import { RiCloseCircleLine } from 'react-icons/ri';
//import { TiEdit } from 'react-icons/ti';


/*const Crud = ({ cruds, completeCrud, removeCrud, updateCrud }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateCrud(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <Crudform edit={edit} onSubmit={submitUpdate} />;
    }

    return cruds.map((crud, index) => (
        <div
            //if the list is complete or not we are checking function 
            className={crud.isComplete ? 'crud-row complete' : 'crud-row'}
            key={index}
            >
                <div key={crud.id} onClick={() => completeCrud(crud.id)}>
                    {crud.text}
                </div>
                <div className='icons'>
                    <RiCloseCircleLine
                    onClick={() => removeCrud(crud.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: crud.id, value: crud.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Crud;*/