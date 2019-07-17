import React from 'react';
import { connect } from 'react-redux';

class ViewTask extends React.Component
{
    constructor(props){
        super(props);
    }

    renderContent(){
        if(this.props.selectedTask != null){
            return(
                <div>
                    <h6>Task Details:</h6>
                    <p>Id:{this.props.selectedTask.id}</p>
                    <p>Task:{this.props.selectedTask.task}</p>
                    <p>Status: {this.props.selectedTask.isCompleted ? 'Completed' : 'Pending'}</p>
                </div>
            );
        }
        else{
            return (
                <p>Select Task to view details.</p>
            );
        }
    }

    render(){
            return this.renderContent();
    }
}

const mapStateToProps = state => {
    return{
        selectedTask: state.todo.selectedTask
    }
}

export default connect(mapStateToProps)(ViewTask);