import React, { Component } from 'react'
import ListItem from  "./item"

export class list extends Component {
    render() {
        return (
            <div className="card mx-3 my-3">
                <h3 className="text-center mx-3 my-3"> 
                    Your Todo List
                </h3>
                <ul className="list-group my-2">

                    {
                        this.props.items.map(item => {return <ListItem item={item} 
                            deleteItem={this.props.deleteItem} editItem={this.props.editItem}/>})
                    }

                    <button type="button" className="btn btn-danger 
                        text-center text-capitalize mx-3 my-3" onClick={this.props.clearList}>
                        clear list
                    </button>
                </ul>
            </div>
        )
    }
}

export default list
