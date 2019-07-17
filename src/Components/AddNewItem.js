import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewTask } from '../actions';

class AddNewItem extends Component{

    constructor(props){
        super(props);
        this.state = {text: ''};
    }

    render(){
        //console.log(this.props);
        return(
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" onChange={(e) => this.setState({text: e.target.value})}></input>
                </div>
                <button type="button" className="btn btn-primary" 
                onClick={() => this.props.addNewTask(this.state.text)}>Add To List</button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return { addNewTask };
}

export default connect(mapStateToProps,{addNewTask})(AddNewItem);
