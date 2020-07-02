import React from 'react';

import "./app-header.css";



const AppHeader = ({ infoHeader }) =>{
    const {todoActive, todoDone} = infoHeader;

    return (
        <div className="todo__header">
            <h1 className="todo__title">My Todo List</h1>
            <p className="todo__info-list">Active { todoActive }, done { todoDone }</p>
        </div>
    )
};


export default AppHeader;