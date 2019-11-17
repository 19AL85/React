import React from 'react';
import ReactDom from 'react-dom';

const TodoList=()=>{
    return (
        <ul>
            <li>LearnReact</li>
            <li>Build Awesome App</li>
        </ul>
    )
}

const AppHeader=()=>{
    return(
        <h1>My ToDo List</h1>
    )
}

const SerchPanel=()=>{
    return <input placeholder="search"/>
}

const App=()=>{
    return(
        <div>
        <AppHeader/>
        <SerchPanel/>
        <TodoList/>
    </div>
    )
}



ReactDom.render(<App/>,document.getElementById('root'));