import React , { useEffect, useState } from 'react';
import axios from 'axios';

import List from '../List/index';
import Badge from '../Badge';
import close from '../../assets/img/close.svg';

import './AddListButtom.scss';


const AddList = ({colors, onAdd}) => {
  const [visiblePopup, setvisiblePopup] = useState(false);
  const [seletedColor, selectColor] = useState(3);
  const [inputValue, setinputValue] =  useState('');

  useEffect(() => {
    if (Array.isArray(colors)){
      selectColor(colors[0].id)
    }
  }, [colors])

  const onClose = () => {
    setvisiblePopup(false);
    setinputValue('');
    selectColor(colors[0].id);
  }


  const addList = () => {
    if (!inputValue){
      alert('Введи название дебил!')
      return;
    }
      
      
      axios
      .post('http://192.168.77.88:3001/lists', {name: inputValue, colorId: seletedColor})
      .then(({data}) => {
        const color = colors.filter(c => c.id === seletedColor)[0].name;
        const listObj = {...data, color: {name: color}};
        onAdd(listObj);
      });
      onClose();
    
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
        
      />
      {visiblePopup && (<div className="add-list_popup">
        <img onClick={onClose} className="add-list_popup-close-bth" src={close} alt='закрыть' /> 
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

