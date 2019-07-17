import { combineReducers } from 'redux';

let idIterator = 0;
const intialState = {
    tasks: [],
    selectedTask: null
}


const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case "SET_AS_DONE":
            var data = state.tasks.map(item => {
                if (item.id === action.payload) {
                    item.isCompleted = true;
                    return item;
                }
                return item;
            });
            //console.log(data);
            return { ...state, tasks: data };
        case "ADD_ITEM":
            //console.log(action);
            return {
                ...state,
                tasks: [...state.tasks, { id: idIterator++, task: action.payload, isCompleted: false }]
            }
        case "REMOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id !== action.payload)
            }
        case "SELECT_TASK":
            return {
                ...state,
                selectedTask: state.tasks.find(item => item.id === action.payload)
            }
        default:
            return state;
    }
}

export default combineReducers({
    todo: todoReducer
});
