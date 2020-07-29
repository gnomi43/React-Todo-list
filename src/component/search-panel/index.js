import React from 'react';

import "./search-panel.css";

export default class SearchPanel extends React.Component  {

    constructor(){
        super();

        this.state = {
            term: ""
        }

        this.onSearchChange = (event) => {
            const term = event.target.value;

            this.setState({ term });
            this.props.onSearchChangeApp(term);
        }
    }

    render(){
        const searchText = 'Type here to search';

        return (
                    <input type="text" 
                        className="todo__search" 
                        placeholder={searchText}
                        value={this.state.term}
                        onChange={this.onSearchChange} />
                        
                )
            };
};