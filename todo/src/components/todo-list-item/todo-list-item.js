import React, {Component} from "react";

import "./todo-list-item.css";

// Компонент класс
export default class TodoListItem extends Component{

  render(){

    const {label, important}=this.props;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };
  
    return (
      <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>
          {label}
        </span>
  
        <button type="button" className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button" className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

// Функциональный компонент

// // Деструктуризайия - {props.label==={label}}
// const TodoListItemFunc = ({ label, important = false }) => {
//   const style = {
//     color: important ? "steelblue" : "black",
//     fontWeight: important ? "bold" : "normal"
//   };

//   return (
//     <span className="todo-list-item">
//       <span className="todo-list-item-label" style={style}>
//         {label}
//       </span>

//       <button type="button" className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation" />
//       </button>

//       <button type="button" className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// };

// export default TodoListItem;
