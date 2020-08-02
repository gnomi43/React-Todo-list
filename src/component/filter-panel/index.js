import React from 'react';

import "./filter-panel.css";


export default class FilterPanel extends React.Component{

    buttons = [
        { name: "all", label: "All" },
        { name: "active", label: "Active" },
        { name: "done", label: "Done" }
    ];


    render() {

        const { filter, onFilterChange } = this.props

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? "todo__filter-btn todo__filter-btn--active" : "todo__filter-btn"
            return (
                <button className={clazz}
                         key={name}
                         onClick={ () => onFilterChange(name) }>
                        { label }
                </button>
            );
        });

        return (
            <div className="todo__filter">
                {buttons}
            </div>
        );
    }
}

