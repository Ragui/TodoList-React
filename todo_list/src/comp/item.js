import React, { Component } from 'react'

export class item extends Component {
    render() {
        const {item, deleteItem} = this.props
        return (
            <li className="list-group-item text-capitalize 
                d-flex justify-content-between mx-3 my-2"  key={item.id}>
                <h2>
                    {item.item}
                </h2>
                <div>
                    <span className="text-success mx-2" onClick={() => this.props.editItem(item.id)}>
                        <i className="fas fa-pen" />
                    </span>
                    <span className="text-danger mx-2" onClick={() => this.props.deleteItem(item.id)}>
                        <i className="fas fa-trash"/>
                    </span>
                </div>
            </li>
        )
    }
}

export default item
