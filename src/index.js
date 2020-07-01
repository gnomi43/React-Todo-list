import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './component/app-header';
import SearchPanel from './component/search-panel';
import TodoList from './component/todo-list';

const App = () => {

    const todoData = [
        { label: "Drink Cofee", important: false, id: 1 },
        { label: "Make Awesome App", important: true, id: 2 },
        { label: "Have a lanche", important: false, id: 3 }
    ];

    return(
        <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos = { todoData } />
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));