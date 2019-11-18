import React, { Component } from 'react';

import AppHeader from "../app-header"
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "..//item-add-form";

import "./app.css";

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesom App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      // Здесь меняется состояние напрямую (splice - изменяет текущий масив) чего делать нельзя!!
      // todoData.splice(idx,1);
      // return{
      //   todoData:todoData
      // };

      const beforeIdx = todoData.slice(0, idx);
      const afterIdx = todoData.slice(idx + 1);

      const newData = [...beforeIdx, ...afterIdx];

      return {
        todoData: newData
      };
    });
  }

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData}
          onDeleted={(id) => this.deleteItem(id)} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }

};

