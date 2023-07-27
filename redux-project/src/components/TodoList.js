import { useCallback, useState, useEffect } from 'react';
import { useSelector,useDispatch } from'react-redux';
import { addTodos, deleteTodos } from '../redux/TodoSlice';
import {useRef} from'react';

function TodoList() {

    // useState를 활용하여 todoList에 저장
    const todos = useSelector((state) => state.todoList.todos);

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    // 리스트 추가
    const handleAddTodo = useCallback(() => {
        const inputValue = inputRef.current.value;
        dispatch(addTodos(inputValue)); // inputValue는 자동으로 매개변수 2번째인 action으로 들어감
        inputRef.current.value = '';
    },[]);

    // 리스트 제거
    const handleDeleteTodo = (id) => {
        dispatch(deleteTodos(id));    
    };


    useEffect( () =>{
        const todo = document.querySelector("#input");
        todo.addEventListener("keyup", enterKey)
        return () => todo.removeEventListener('keyup' , enterKey);
    })

    const enterKey = (e) => {
        console.log(e)
        if(e.key == 'Enter') {
            handleAddTodo();
        }
    }
    return (
        <div>
            {/* {console.log(todos)} */}
            <h2>Todo List</h2>
            <input type="text" id='input' ref={inputRef} />
            <button onClick={handleAddTodo}>추가</button>
            <ul>
                {
                    todos.map(
                        (item, index) => <li key={item.id}>{item.todo} <a onClick={() => handleDeleteTodo(item.id) }>👍</a></li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList;