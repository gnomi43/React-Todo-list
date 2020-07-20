import React from 'react';

import "./item-add-form.css"

export default class ItemAddForm extends React.Component{
    render(){
        return (
            <div className="item-add-form">
                <button className="item-add-form__btn"
                onClick={() => this.props.onItemAdded("Hello World")}>Add item</button>
            </div>
        )
    };
};