import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ToDoList.css';
import { setTaskAsDone, selectTask } from '../actions';

class ToDoList extends Component {

    constructor(props) {
        super(props);
    }

    getListItemContent() {
        return (
            this.props.todoItems.map((item) => {
                return (
                    <div key={item.id}>
                        <span>{item.task}</span>
                        <span><a href="#" onClick={() => this.props.setTaskAsDone(item.id)}>Mark as Done</a></span>
                        <span><a href="#" onClick={() => this.props.selectTask(item.id)}>View</a></span>
                    </div>
                );
            })
        );
    }

    render() {
        //console.log("props",this.props);
        return (
            <div>
                <div>Pending Items</div>
                <div className="d-flex pending-list">
                    {this.getListItemContent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log("state",state);
    return {
        setTaskAsDone: setTaskAsDone,
        selectTask: selectTask,
        todoItems: state.todo.tasks.filter(item => item.isCompleted === false)
    };
}

export default connect(mapStateToProps, { setTaskAsDone, selectTask })(ToDoList);