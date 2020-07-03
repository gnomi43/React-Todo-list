import React from 'react';

import "./filter-panel.css";


export default class FilterPanel extends React.Component{
    render() {
        return (
            <div className="todo__filter">
                <button className="todo__filter-btn todo__filter-btn--active">
                    All
                </button>
                <button className="todo__filter-btn">
                   Active
                </button>
                <button className="todo__filter-btn">
                    Done
                </button>
            </div>
        );
    }
}

