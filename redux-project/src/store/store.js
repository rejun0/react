import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';
import TodosReducer  from '../redux/TodoSlice';

export default configureStore({
        reducer : {
            counter : counterReducer,
            todoList : TodosReducer
        },
        middleware : []
    }
);