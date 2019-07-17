import React from 'react';
import { connect } from 'react-redux';

import { removeTask } from '../actions';

class CompletedList extends React.Component{

    constructor(props){
        super(props);
    }

    getListItemContent(){
        return(
                this.props.completedItems.map((item) => {
                return (
                    <div key={item.id}>
                        <span>{item.task}</span>
                        <span><a href="#" onClick={e => this.props.removeTask(item.id)}>Remove</a></span>
                    </div>
                );
            })
        );
    }

    render(){
        return(
            <div>
                <div>Completed Items</div>
                <div className="content-header">
                    { this.getListItemContent() }
                </div>
            </div>
        );
    }
}

const mapStateToProps= (state) => {
    return {completedItems: state.todo.tasks.filter((item) => { return item.isCompleted === true}),
            removeTask: removeTask};
}

export default connect(mapStateToProps,{removeTask})(CompletedList);