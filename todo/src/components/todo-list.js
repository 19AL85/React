import React from "react";

import TodoListItem from "./todo-list-item"; 
import './todo-list.css';

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    //  в id деструктурируется item.id 
    //  а в ...itemProps все остальное.
      const  {id, ...itemProps} = item;

      return(
        <li key={item.id} className="list-group-item">
            {/* using Spread operator */}
            <TodoListItem {...itemProps}/> 

            {/* with out Spread operator */}
            {/* <TodoListItem 
                label={item.label} 
                important={item.important} /> */}
        </li>
      )
  });

  return (
    <ul className="list-group todo-list">
        {elements}
    </ul>
  );
};

export default TodoList;
