import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TodoInput from "./comp/inputForm"
import List from "./comp/list"

import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid"

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items : [],
      edit : false,
      item : '',
      id: uuid()
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      item: this.state.item,
      id: this.state.id
    }

    const newArray = [...this.state.items, newItem]
    
    this.setState({
      items: newArray,
      edit: false,
      item: '',
      id: uuid()
    })
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  deleteItem = id => {
    const newArray = this.state.items.filter((item) => item.id != id)
    this.setState({
      items: newArray
    })

  }

  editItem = id =>{
    const currItem = this.state.items.find((item) => item.id == id)
    const newArray = this.state.items.filter((item) => item.id != id)
    this.setState({
      items: newArray,
      id: currItem.id,
      item: currItem.item,
      edit: true
    })

  }

  render() {
    // if edit button, change item to value of text
    return (
      <div>
        <TodoInput handleSubmit={this.handleSubmit} edit={this.state.edit} item={this.state.item} handleChange={this.handleChange}/>
        <List items={this.state.items} clearList={this.clearList} deleteItem={this.deleteItem} editItem={this.editItem}/>
      </div>
    )
  }
}

export default App;

