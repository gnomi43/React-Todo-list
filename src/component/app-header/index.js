import React from 'react';

import "./app-header.css";



const AppHeader = ({ todoList, todoDone }) =>{

    return (
        <div className="todo__header">
            <h1 className="todo__title">My Todo List</h1>
            <p className="todo__info-list"> { todoList } more to do, { todoDone } done</p>
        </div>
    )
};


export default AppHeader;