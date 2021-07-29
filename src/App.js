import React from "react";
import List from './componets/List'



function App() {
  return (
  <div className="todo">
    <div className="todo_sidebar">
      <List
        items={[
          {
            icon: null,
            name: 'все задачи'
          },
          {
            icon: null,
            name: 'все задачи'
          }
      ]}
      />
    
      </div>
  </div>
  );
}
  
export default App;
