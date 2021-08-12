import React , { useState } from 'react';
import List from '../List/index';
import Badge from '../Badge';
import close from '../../assets/img/close.svg';

import './AddListButtom.scss';

const AddList = ({colors, onAdd}) => {
  const [visiblePopup, setvisiblePopup] = useState(false);
  const [seletedColor, selectColor] = useState(colors[0].id);
  const [inputValue, setinputValue] =  useState('');


  const addList = () => {
    if (!inputValue){
      alert('Введи название дебил!')
      return;
    }else{
      const color = colors.filter(c => c.id === seletedColor)[0].name;
      onAdd( {id: Math.random(),name: inputValue,color: color});
    }
  }

  console.log(seletedColor);

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
        <img onClick={() => setvisiblePopup(false)} className="add-list_popup-close-bth" src={close} alt='закрыть' /> 
        <input 
        value={inputValue}
        onChange={e => setinputValue(e.target.value)} 
        className="field" 
        type="text"
         placeholder="название задания"
         />
          
          <div className="add-list_popup-colors">
            {colors.map(color => (<Badge 
            onClick={()=>  selectColor(color.id)} 
            key={color.id} 
            color={color.name}
            className={seletedColor === color.id && 'active'}
            />))}
            

            
            {/*{colors.map(color => (
           
            <i key={color.id} className={`badge badge--${color.name}`}></i>))}*/}
          </div>
        <button onClick={addList} className="button">Добавить</button>
      </div>)}
      </div>
  );
};


export default AddList;

