import React, { useState, useEffect } from 'react'
import TodoList from './TodoList';
import './Form.css'
function Form() {

    const [todo, setTodo] = useState([])// more than one properties
    const [inputText, setInputText] = useState("")
    const [status, setStatus] = useState("all")
    const [filteredTodo, setFilteredTodo] = useState([])


    const submitHandler = (e) => {
        setTodo([...todo, {
            text: inputText,
            completed: false,
            id: Date.now() + performance.now().toString().replace(".", "-")
        }])
        setInputText("")
        e.preventDefault();

    }
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
        console.log(inputText)
    }
    const selectHandler = (e) => {
        const checkStatus = e.target.value
        setStatus(checkStatus)

        console.log(checkStatus)
    }

    useEffect(()=>{
        const getLocalTodos = ()=>{
            if(localStorage.getItem("todos")===null){
                localStorage.setItem("todos", JSON.stringify([]))
                
            }
            let store = localStorage.getItem("todos")
            localStorage.setItem("todos", JSON.stringify(store))
         
            console.log(store)

        }
        getLocalTodos()
    }, [])

    useEffect(() => {
        const filterHandler = () => {
            switch (status) {
                case 'completed':
                    setFilteredTodo(todo.filter((todo) => todo.completed === true))
                    break
                case 'uncompleted':
                    setFilteredTodo(todo.filter((todo) => todo.completed === false))
                    break

                default:
                    setFilteredTodo(todo)
                    break
            }
        }
        const saveLocalTodos = ()=>{
            // if(localStorage.getItem("todos")===null){
            //     localStorage.setItem("todos", JSON.stringify([]))
            // }
            localStorage.setItem("todos", JSON.stringify(todo))
        }
        filterHandler()
        saveLocalTodos()
 
    }, [todo, status])


    return (

        <div>
            <form id="todo-form" onSubmit={submitHandler}>
                <input type="text" value={inputText} onChange={inputTextHandler} />
                <button className="btn" type="submit">Add</button>
                <div id="select-list">
                    <select name="todos" onChange={selectHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <TodoList setTodos={setTodo} todoList={filteredTodo} status={status} />
        </div>
    )
}

export default Form
