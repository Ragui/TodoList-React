import React, { Component } from 'react'

export class item extends Component {
    state = {
        id : 1
    }

    render() {
        const text = this.props.text
        return (
            <li className="list-group-item text-capitalize 
                d-flex justify-content-between mx-3 my-2">
                <h3>
                    {text}
                </h3>
                <div>
                    <span className="text-success mx-2">
                        <i className="fas fa-pen"/>
                    </span>
                    <span className="text-danger mx-2">
                        <i className="fas fa-trash"/>
                    </span>
                </div>
            </li>
        )
    }
}

export default item
