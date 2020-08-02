import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import FilterPanel from '../filter-panel';
import ItemAddForm from '../item-add-form';

import "./app.css"

export default class App extends React.Component {

    constructor(){
        super();

        this.maxId = 100;




        this.createTodoItem = ( label ) => {
            return{
                label,
                important: false,
                done: false,
                id: this.maxId++
            }
        };

        this.state ={
            todoData: [
                this.createTodoItem("Drink Cofee"),
                this.createTodoItem("Make Awesome App"),
                this.createTodoItem("Have a lanche")
            ],
            term: "",
            filter: "all"
        };


        this.deleteItem = (id) => {
            
            this.setState( ({ todoData }) => {

                const idx = todoData.findIndex((el) => el.id === id);
                const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];

                return{
                    todoData: newArray
                }

            });
        };

        this.addItem = (text) => {
            const newItem = this.createTodoItem(text);

            this.setState(({ todoData })=>{

                const newArray = [...todoData, newItem];

                return{
                    todoData: newArray
                }

            });
        };


        this.togglePropery = (arr, id, propName) => {
            const idx = arr.findIndex((el) => el.id === id);

            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]};

            return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
        };

        this.onToggleDone = (id) => {
            this.setState(( { todoData } ) => {
                
                return {
                    todoData: this.togglePropery(todoData, id, "done")
                }
            });
        };

        this.onToggleImportant = (id) => {
            this.setState(( { todoData } ) => {
                return {
                    todoData: this.togglePropery(todoData, id, "important")
                }
            });
        };

        this.search = (items, term) => {
            if(term.length === 0){
                return items;
            }

            return items.filter((item)=>{
                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
            });
        };

        this.onSearchChange = (term) => {
            this.setState({ term });
        };

        this.filterPanel = (items, filter) => {
            switch(filter) {
                case "all": 
                    return items;
                case "active":
                    return items.filter((item) => !item.done);
                case "done":
                    return items.filter((item) => item.done);
                default: 
                    return items;
            }
        }

        this.onFilterChange = (filter) =>{
            this.setState({ filter });
        }

    };


        render() {
            const doneCount = this.state.todoData.filter( el => el.done ).length;
            const todoCount = this.state.todoData.length - doneCount;

            const { todoData, term, filter } = this.state;

            const visibleItems = this.filterPanel(
                this.search(todoData, term), filter);


            return(
                <div className="todo__wrapper">
                    <AppHeader todoList = {todoCount} todoDone = {doneCount} />
                    <div className="todo__control">
                        <SearchPanel 
                        onSearchChangeApp={this.onSearchChange}/>
                        <FilterPanel    filter={filter}
                                        onFilterChange = {this.onFilterChange}
                        />
                    </div>
                    <TodoList 
                        todos = { visibleItems }
                        onDeleted={ this.deleteItem }
                        onToggleImportant={ this.onToggleImportant }
                        onToggleDone={ this.onToggleDone }/>

                    <ItemAddForm onItemAdded={this.addItem}/>
                </div>
            );
        };
};
