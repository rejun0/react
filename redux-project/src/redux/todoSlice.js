import { createSlice } from "@reduxjs/toolkit";

const todoSlist = createSlice({
    name : 'todoList',
    initialState : {
        todos : []
    },
    reducers : {
            addTodo : (state, action) => {
                // state.todos.push(action.payload);
                console.log(action); // addTodos에 두번째 매개변수로
                // view에서 호출한 inputValue가 넘어옴(payload의 값으로써)
                const newTodo = {
                    todo : action.payload,
                    id : state.todos.length
                }
                // state에 newTodo를 추가한후 스토어에 값을 전달
                return {...state, todos : [...state.todos, newTodo]}
            },
            deleteTodo : (state, action) => {
                const updatedTodos = state.todos.filter((todo) => todo.id!== action.payload);
                //  state.todos = state.todos.filter(todo => todo.id!== action.payload.id);
                return {...state,todos : updatedTodos};
            }
        }
});

export const { addTodo, deleteTodo } = todoSlist.actions; // reducer -> actions
export default todoSlist.reducer; // default는 한번만 가능 