import React, { useState } from 'react';

const Crudlist = ({add}) => {
  const [text, setText] = useState("");
  return (
     
    <div className="Crudlist">
      <h1> Daily Plans </h1>
      <input value={text} onChange={e => setText(e.target.value)} className="CrudlistInput" />
      <button className="CrudlistButton" onClick={() => {add(text); setText("")}}>Add</button>
    </div>
  );
}

export default Crudlist;

/*import Crudform from './Crudform';
import Crud from './Crud';

function Crudlist() {
    const [cruds, setCruds] = useState([]);

    const addCrud = crud => {
        if (!crud.text || /^\s*$/.test(crud.text)) {
            return;
        }

        const newCruds = [crud, ...cruds];

        setCruds(newCruds);
        console.log(...cruds);
    };

    const updateCrud = (crudId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return; 
    }

    setCruds(prev => prev.map(item => (item.id === crudId ? newValue : item)));
};

const removeCrud = id => {
    const removedArr = [...cruds].filter(crud => crud.id !== id);

    setCruds(removedArr);
};

const completeCrud = id => {
    let updatedCruds = cruds.map(crud => {
        if(crud.id === id) {
            crud.isComplete = !crud.isComplete;
        }
        return crud;
    });
    setCruds(updatedCruds);
};

return (
    <>
    <h1> Daily Plans </h1>
    <Crudform onSubmit={addCrud} />
    <Crud
        cruds={cruds}
        completeCrud={completeCrud}
        removeCrud={removeCrud}
        updateCrud={updateCrud}
    />
    </>
);
}

export default Crudlist;*/