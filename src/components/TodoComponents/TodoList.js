// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList=props=>{
    return(
        <div class='list'>
            {props.todos.map(todo=>(
                <Todo todo={todo}toggleTodo={props.toggleTodo}/>
            ) ) }
        </div>
    );
};
TodoList.defaultProps={
    task:'default task',
};
export default TodoList;
