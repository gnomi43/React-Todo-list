import React from 'react';

import "./todo-list-item.css";

const TodoListItem = ( { label, important = false } ) => {

    return <span>{ label }</span>
};

export default TodoListItem;