import {createSlice} from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : 'todoList',
    initialState : {
        todos : []
    },
    reducers : {
        addTodos : (state, action) => {
            console.log(action);
            // view에서 호출한 inputValue가 넘어옴(payload의 값으로)
            const newTodo = {
                todo : action.payload,
                id : state.todos.length
            }
            // state에 newTodo 추가한 후 스토어에 값을 전달
            return {...state, todos : [...state.todos, newTodo]}
        },
        deleteTodos : (state, action) => {
            const updateTodos = state.todos.filter((todo) => todo.id!== action.payload);
            return {...state, todos : updateTodos};
        }   
    }
});

export const {addTodos, deleteTodos} = TodoSlice.actions;

export default TodoSlice.reducer;