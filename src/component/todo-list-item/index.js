import React from 'react';

import "./todo-list-item.css";


export default class TodoListItem extends React.Component {



    constructor(){
        super();

        this.onLabelCkick = () => {
            if(this.state.done){
                this.setState({
                    done: false
                });
            } else{
                this.setState({
                    done: true
                });
            }
        };

        this.state = {
            done: false
        };
    }

    render(){
        const {label, important = false} = this.props;
        const { done } = this.state;

        let classNames ="";

        if (done){
            classNames = "done";
        }
        

        const style = {
            color: important ? "blue" : "black",
            fontWeight: important ? "700" : "400"
        };

       return <span
                className = { classNames }
                onClick={ this.onLabelCkick }
                style = { style }>
                { label }
            </span>
    }

}