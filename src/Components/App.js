import React from 'react';
import ReactDOM from 'react-dom';

import ToDoList from './ToDoList';
import AddNewItem from './AddNewItem';
import CompletedList from './CompletedList';
import ViewTask from './ViewTask';
import './App.css';

class App extends React.Component{

    constructor(props){
        super(props);
    }

    // onAddItemSubmit = (itemText) => {
    //     this.setState({ todoListItems : this.state.todoListItems.concat({Id:2, Message: itemText, IsCompleted: false})});
    // }

    // onRemoveItem = (itemId) => {
    //     this.setState({ todoListItems : this.state.todoListItems.filter((list) => list.Id != itemId)});
    // }

    // onMarkAsComplete = (itemId) =>{
    //     debugger;
    //     this.setState({todoListItems: this.state.todoListItems.map((item) => {
    //         if(item.Id == itemId){
    //             return {Id: item.Id, Message:item.Message, IsCompleted: true} ;
    //         }
    //     })});
    // }

    render() {
        return (
          <div className="container">
            <div className="d-flex justify-content-center">
              <h2>To-Do List</h2>
            </div>
            <div className="d-flex flex-direction-row todo-app">
              <div className="todoList">
                <ToDoList/>
              </div>
              <div className="addItem">
                <AddNewItem/>
              </div>
              <div className="completedList">
                <CompletedList />
              </div>
            </div>
            <div className="d-flex">
              <ViewTask/>             
            </div>
          </div>
        );
      }
}

export default App;