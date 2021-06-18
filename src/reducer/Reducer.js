export const initialState = {
    counter: 2,
    cruds:[{
        id: 1,
        text: "Hello",
    }, {
        id: 2,
        text: "How are you",
    }],
};
    
export const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            {
                const newCounter = state.countre + 1;
                const newCrud = {
                    id: newCounter,
                    text: action.text,
                };
                return {
                    counter: newCounter,
                    cruds: [...state.cruds, newCrud],
                };
            }
        case "edit":
            {
                const idx = state.cruds.findIndex(t => t.id === action.id);
                const crud = Object.assign({}, state.cruds[idx]);
                crud.text = action.text;
                const cruds = Object.assign([], state.cruds);
                cruds.splice(idx, 1, crud);
                return {
                    counter: state.counter,
                    cruds: cruds,
                };
            }
        case "remove":
            {
                const idx = state.cruds.findIndex(t => t.id === action.id);
                const cruds = Object.assign([], state.cruds);
                cruds.splice(idx, 1);
                return {
                    counter: state.counter,
                    cruds: cruds,
                };
            }
        default:
            return state;
    }
}