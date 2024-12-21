import {ADD_TODO , FINISH_TODO , DELETE_TODO , EDIT_TODO} from '../constants/action.js'
// Finished Todo
export const todoFinished = (todo , isFinished) => ({type: FINISH_TODO, payload:{todo ,isFinished:isFinished}});

// Add Todo
export const addTodo = (inputText) => ({type:ADD_TODO, payload:{todoText:inputText}});

// Delete Todo
export const deleteTodo = (todo) => ({
    type:DELETE_TODO,
     payload:{id:todo.id} 
    });

// Edit Todo
export const editTodo = (id, todoText) => ({
    type:EDIT_TODO,
     payload:{id, todoText}
    });