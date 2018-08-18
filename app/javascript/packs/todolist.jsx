import React, { Component } from 'react';
import AddForm from './components/AddForm';
import ToDoOther from './components/TodoOther';

class ToDoList extends Component {
  render() {
    return (
      <div>
        <AddForm />   
        <AddForm store={this.props.store} />
        <ToDoOther />  
        <ToDoOther store={this.props.store} />
      </div>
    )
  }
}

export default ToDoList