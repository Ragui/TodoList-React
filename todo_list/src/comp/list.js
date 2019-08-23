import React, { Component } from 'react'
import ListItem from  "./item"

export class list extends Component {
    state = {
        items : [],
    }

    render() {
        const text = this.props.item
        return (
            <div className="card mx-3 my-3">
                <h3 className="text-center mx-3 my-3"> 
                    Your Todo List
                </h3>
                <ul className="list-group my-2">
                    <ListItem text={text}/>
                    <button type="button" className="btn btn-danger 
                        text-center text-capitalize mx-3 my-3">
                        clear list
                    </button>
                </ul>
            </div>
        )
    }
}

export default list
