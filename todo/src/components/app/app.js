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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesom App'),
      this.createTodoItem('Have a lunch'),
      this.createTodoItem('Do someth')
    ],
    term: '',
    filter: 'all'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
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
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    const beforeIdx = arr.slice(0, idx);
    const afterIdx = arr.slice(idx + 1);

    return [...beforeIdx, newItem, ...afterIdx];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  }

  search(items, term) {
    if (term.length === 0) return items;

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onFilterChange=(filter)=>{
    this.setState({ filter });
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItemt = this.filter(
      this.search(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    //const search= todoData.filter((el)=>el.label.substr(0,searchPattern.length)===searchPattern);


    return (
      <div className="todo-app" >
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex" >
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter filter={filter}
            onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList todos={visibleItemt}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdded={this.addItem} />
      </div >
    );
  }

};