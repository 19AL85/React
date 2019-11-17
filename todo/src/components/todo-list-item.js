import React from 'react';

// Деструктуризайия - {props.label==={label}}
const TodoListItem=({ label, important = false })=>{

    const style={
        color:important ? 'tomato' : 'black'
    }
    
    return <span style={style}>{label}</span>;
}

export default TodoListItem;