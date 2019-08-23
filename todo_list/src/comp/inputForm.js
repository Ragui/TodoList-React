import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export class inputForm extends Component {
    render() {
        return (
            <div className="card mt-3 mx-3">
                                    <div id="temp"></div>

                <form className="mx-3 my-3">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text text-info">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text" id="newItem" className="form-control"/>
                    </div>
                    <button type="button" onClick={this.props.addItem}
                        className="btn btn-primary btn-block mt-3 text-capitalize">
                        add item
                    </button>
                </form>

            </div>
        )
    }
}

export default inputForm
