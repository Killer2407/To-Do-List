import React, { useState } from 'react';
import Crudform from './Crudform';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


const Crud = ({ cruds, completeCrud, removeCrud, updateCrud }) => {
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

export default Crud;