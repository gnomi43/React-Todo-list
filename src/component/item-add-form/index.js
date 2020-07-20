import React from 'react';

import "./item-add-form.css"

export default class ItemAddForm extends React.Component{

    constructor(){
        super();

        this.state = {
            label: ''
        };


        this.onLabelChange = (event) =>{
            this.setState({
                label: event.target.value
            });
        };

        this.onSubmit = (event) => {
            event.preventDefault();
            this.props.onItemAdded(this.state.label)
        };
    }
    
    render(){
        return (
            <form   className="item-add-form"
                    onSubmit={this.onSubmit}>
                <input  type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done" />
                <button className="item-add-form__btn"
                type="submit">Add item</button>
            </form>
        )
    };
};