import React from 'react';

import TodoListItem from '../todo-list-item';
import ElementEdit from '../element-edit';
import "./todo-list.css";

const TodoList = ({ todos }) => {

    const elements = todos.map(item => {    

        const { id, ...itemProps } = item;

            return( 
                <li className="todo__item" key={item.id}>
                    <TodoListItem { ...itemProps }/>
                    <ElementEdit />
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