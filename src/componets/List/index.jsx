import React from 'react';
import classNames from 'classnames';

import './List.scss'

const List = ({ items, isRemovable }) =>{
    console.log(items, isRemovable);
    return(
        <ul className="list">
            {items.map((item, index)=> (
            <li key={index} className={classNames({active: item.active})}>
             <i>{item.icon ? (item.icon) : (<i className={`badge badge--${item.color}`}></i>)}
            </i>
            <span className={item.title}>{item.name}</span>
            </li>
            ))}
        </ul>
    );
};

export default List;
