import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import FilterPanel from '../filter-panel';

import "./app.css"

const App = () => {

    const todoData = [
        { label: "Drink Cofee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lanche", important: false, id: 3 }
    ];

    const info = {
        todoActive: "1",
        todoDone: "2",
      };

    return(
        <div className="todo__wrapper">
            <AppHeader infoHeader = { info } />
            <div className="todo__control">
                <SearchPanel />
                <FilterPanel />
            </div>
            <TodoList todos = { todoData } />
        </div>
    );
};

export default App;