import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo,deleteTodo } from "../redux/todoSlice";
import { useRef } from "react";
// function TodoList(){

//     //useState를 활용하여 todolist를 state에 저장
//     const [todos, setTodos] = useState([]);
    
//     //투두리스트 추가기능
//     const handleAddTodo = useCallback(() => {
//         let num = 0;
//         const newTodos = {
//             text : document.getElementById("text").value
//         }
//         setTodos([...todos, newTodos]);
//     },[todos]);

//     //완료한 투두리스트 삭제기능
//     const handleDeleteTodo = useCallback(() => {
        
//         setTodos([  
        
//         ])});
//     return(
//         <div>
//             <h2>Todo List</h2>
//             <input type="text" id="text"/>
//             <button onClick={handleAddTodo}>추가</button>
//             <ul>
//                 <li>오늘할일<a onClick={handleDeleteTodo}>🐱‍👤</a></li>
//                 {todos.map(todo => <li onClick={handleDeleteTodo} >{todo.text}🐱‍👤</li>)}
//             </ul>
//         </div>
//     )
// }
//
//export default TodoList;

function TodoList() {
    // useState를 활용하여 todoList를 state에 저장
    const todos = useSelector((state) => state.todoList.todos)
    const inputRef = useRef(null);

    const dispatch = useDispatch();
    
    // 투두리스트 추가기능
    const handleAddTodo = useCallback(() => {
        const inputValue = inputRef.current.value;
        dispatch(addTodo(inputValue)); // addTodo의 두번째 변수로 들어감, 첫번째 state는 고정
        inputRef.current.value = "";
},[]);

    // 완료한 투두리스트 삭제기능
    const handleDeleteTodo = useCallback((id) => {
        dispatch(deleteTodo(id)); // deleteTodo의 ���번�� 변수로 �
    }

    ); 
    

    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" ref={inputRef}/>
            <button onClick={handleAddTodo}>추가</button>
            <ul>
                {
                    todos.map(
                        (item, index) => 
                        <li key={item.id}>{item.todo}<a onClick={() => handleDeleteTodo(item.id)}>✅</a></li>
                    )
                }
            </ul>
        </div>
    )

}

export default TodoList;