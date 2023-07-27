import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counterSlice';
import todoReducer from '../redux/todoSlice';

export default configureStore(   {
    reducer : {
        counter : counterReducer,
        todoList : todoReducer
    },
    middleware : []

   

});