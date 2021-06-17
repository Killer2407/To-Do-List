import React, { useState } from 'react';

function Crudlist() {
    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value);
      };
    
      const AddTask = () => {
        if (task !== "") {
          const taskDetails = {
            id: Math.floor(Math.random() * 1000),
            value: task,
            isCompleted: false,
          };
    
          setTaskList([...tasklist, taskDetails]);
        }
      };
    
      const deletetask = (e, id) => {
        e.preventDefault();
        setTaskList(tasklist.filter((t) => t.id != id));
      };
    
      const taskCompleted = (e, id) => {
        e.preventDefault();
        //let's find index of element
        const element = tasklist.findIndex((elem) => elem.id == id);
    
        //copy array into new variable
        const newTaskList = [...tasklist];
    
        //edit our element
        newTaskList[element] = {
          ...newTaskList[element],
          isCompleted: true,
        };
    
        setTaskList(newTaskList);
      };
    
      return (
        <div className="crud">
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) => handleChange(e)}
            placeholder="Add task here..."
          />
          <button className="add-btn" onClick={AddTask}>
            Add
          </button>
          <br />
          {tasklist !== [] ? (
            <ul>
              {tasklist.map((t) => (
                <li className={t.isCompleted ? "crossText" : "listitem"}>
                  {t.value}
                  <button
                    className="completed"
                    onClick={(e) => taskCompleted(e, t.id)}
                  >
                    Completed
                  </button>
    
                  <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
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