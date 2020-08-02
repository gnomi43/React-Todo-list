import React from 'react';

import TodoListItem from '../todo-list-item';
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

    const elements = todos.map(item => {    

        const { id, ...itemProps } = item;

            return( 
                <li className="todo__item" key={item.id}>
                    <TodoListItem
                         { ...itemProps }
                         onDeleted={ () => onDeleted(id) }
                         onToggleImportant={ ()=>onToggleImportant(id) }
                         onToggleDone={ ()=>onToggleDone(id) }/>
                </li>
                );
        });

    return (
        <ul className="todo__list">
            { elements }
        </ul>
    );
};

export default TodoList;