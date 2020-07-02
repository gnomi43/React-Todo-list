import React from 'react';

import "./element-edit.css";

const ElementEdit = () => {

    return (
        <div className="todo__item-edit">
            <button className="item-edit__btn item-edit__btn-trash"></button>
            <button className="item-edit__btn item-edit__btn-delete"></button>
        </div>
    );
};

export default ElementEdit;