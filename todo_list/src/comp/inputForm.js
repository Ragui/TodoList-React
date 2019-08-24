import React, { Component } from 'react'
import item from './item';


export class inputForm extends Component {
    render() {
        const buttonText = function(editButton)  {
            if(editButton === true){
                return "Edit item";
            } else {
                return "Add Item";
            }
        }

        return (
            <div className="card mt-3 mx-3">
                <h3 className="text-center mx-3 my-3"> 
                    Input Form
                </h3>
                <form className="mx-3 my-3" onSubmit={this.props.handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text text-info">
                                <i className="fas fa-book" />
                            </div>
                        </div>
                        <input type="text" id="newItem" className="form-control" 
                            value={this.props.item} onChange={this.props.handleChange}/>
                    </div>
                    <button type="submit" 
                        className="btn btn-primary btn-block mt-3 text-capitalize">
                        {buttonText(this.props.edit)}
                    </button>
                </form>

            </div>
        )
    }
}

export default inputForm
