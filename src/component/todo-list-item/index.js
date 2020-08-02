import React from "react";

import "./todo-list-item.css";


export default class TodoListItem extends React.Component {

    constructor(){
        super();

        this.onLabelCkick = () => {
            this.setState((state) => {
                return {
                    done: !state.done
                };
            });
        };

        this.onMarkImportant = () =>{
            this.setState((state) => {
                return {
                    important: !state.important
                };
            });
        };

    }

    render(){
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done} = this.props;

        let classNames ="todo-list-item";
        if (done){
            classNames += " done";
        }
        
        if (important) {
            classNames += " important"
        }

       return (
            <div className="todo__item-wrapper">
                <span
                    className = { classNames }
                    onClick={ onToggleDone }>
                    { label }
                </span>

                <div className="todo__item-edit">
                    <button
                        type="button"
                        className="item-edit__btn item-edit__btn-trash"
                        onClick={ onDeleted }>
                        </button>

                    <button 
                        type="button"
                        className="item-edit__btn item-edit__btn-delete">                            
                        </button>

                    <button 
                        type="button"
                        className="item-edit__btn item-edit__btn-important"
                        onClick={ onToggleImportant }>
                        </button>
                </div>
            </div>
            )
    }

}