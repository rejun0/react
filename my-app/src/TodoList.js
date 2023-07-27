import { useCallback, useState } from "react";
import './App.css';

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
    const[todos, setTodos] = useState([]);

    
    // 투두리스트 추가기능
    const handleAddTodo = useCallback(
        () => {
            const input = document.querySelector("input[type='text']");
            const newTodo = {
                todo : input.value
            }
            setTodos([...todos, newTodo]);
            input.value = "";
        }, [todos]
    );

    // 완료한 투두리스트 삭제기능
    const handleDeleteTodo = useCallback(
        (index) => {
            const updateTodos = todos.filter(function(item, index2) {
                if(index2 != index) {
                    return true;
                } else {
                    return false;
                }
            })
            setTodos(updateTodos);
        }
    ); 
    

    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" />
            <button onClick={handleAddTodo}>추가</button>
            <ul>
                {
                    todos.map(
                        (item, index) => <li key={index}>{item.todo}<a onClick={() => handleDeleteTodo(index)}>✅</a></li>
                    )
                }
            </ul>
        </div>
    )

}

export default TodoList;