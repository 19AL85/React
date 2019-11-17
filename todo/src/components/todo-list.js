import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
      return(
        <li>
            {/* using Spread operator */}
            <TodoListItem {...item}/>

            {/* with out Spread operator */}
            {/* <TodoListItem 
                label={item.label} 
                important={item.important} /> */}
        </li>
      )
  });

  return (
    <ul>
        {elements}
    </ul>
  );
};

export default TodoList;
