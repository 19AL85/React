import React, { Component } from "react";

import "./todo-list-item.css";

// Компонент класс
export default class TodoListItem extends Component {
  // constructor(params) {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(this.props.label);
  //   };
  //   this.state = {
  //     done: false
  //   };
  // }

  //-----эксперементальный синтаксис еще не вошедший в стандарт ES

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done})=>{
      return{
        done: !done
      }
    });
  };

  onMarkImportant = () => {
    /* если state не зависит от текущего состояния
    this.setState({
      important: true
    })
    */
    this.setState(state => {
      return{
        important: !state.important
      };
    });
  };
  //---------------------------------------
  render() {
    const { label } = this.props;
    const { done, important } = this.state;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
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
