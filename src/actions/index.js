
export const setTaskAsDone = (itemId) => {
    return{
        type: 'SET_AS_DONE',
        payload: itemId
    }
}

export const addNewTask = (message) =>{
    return{
        type:'ADD_ITEM',
        payload: message
    }
}

export const removeTask = id => {
    return{
        type: "REMOVE_TASK",
        payload: id
    }
}

export const selectTask = id => {
    return{
        type: "SELECT_TASK",
        payload: id
    }
}

// export const getTodoItems = () => {
//     return{
//         type:"GET_ITEMS"
//     }
// }