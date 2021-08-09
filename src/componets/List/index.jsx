import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge'

import './List.scss'

const List = ({ items, isRemovable, onClick}) =>{
    return(
        <ul onClick={onClick} className="list">
            {items.map((item, index)=> (
            <li key={index} 
            className={classNames({active: item.active})}>
             <i>{item.icon ? (item.icon) : (<Badge color={item.color}/>)}
            </i>
            <span className={item.title}>{item.name}</span>
            </li>
            ))}
        </ul>
    );
};

export default List;
