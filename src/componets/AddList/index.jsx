import React , { useState } from 'react';
import List from '../List/index';

import './AddListButtom.scss';

const AddList = ({colors}) => {
  const [visiblePopup, setvisiblePopup] = useState(false);

  return(
  <div className="add-List">
        <List
        onClick={() => setvisiblePopup(!visiblePopup)}
        items={[
          {
            icon: (<svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="list_icon-plus">
            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>),
            name: 'добавить задачу',
            title: 'cnopcka'
            
          }
        ]}
        isRemovable
      />
      {visiblePopup && (<div className="add-list_popup">
        <input className="field" type="text" placeholder="название задания"/>
          <div className="add-list_popup-colors">
            
            {colors.map(color => (
           
            <i key={color.id} className={`badge badge--${color.name}`}></i>))}
          </div>
        <button className="button">Добавить</button>
      </div>)}
      </div>
  );
};


export default AddList;

