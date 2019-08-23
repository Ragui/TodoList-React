import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoInput from "./comp/inputForm"
import List from "./comp/list"

import "bootstrap/dist/css/bootstrap.min.css"

export class App extends Component {
  state = {
    items : [],
    edit : false,
    item : ''
  }

  addItem = () =>{
    // const newItem = <h2>  </h2>;
    this.setState({
      item : document.getElementById('newItem').value
    });
    //change the state of list
    // ReactDOM.render(newItem, document.getElementById('temp'));
  }

  render() {
    return (
      <div>
        <TodoInput addItem={this.addItem} />
        <List item={this.state.item}/>
      </div>
    )
  }
}

export default App;

