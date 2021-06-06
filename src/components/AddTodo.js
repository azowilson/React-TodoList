import React from 'react'
import '../App.css';

function AddTodo({ todoItem, setTodos, todos, todo}) {


    const completeHandler = () => {
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return { //return an object
                    ...item, //every properties of the object
                    completed: !item.completed //set the specific property
                    
                }
                
            }
          
            return item

        }))

    }
    const deleteHandler = () => {
      // console.log(todo)
       setTodos(todos.filter((el)=> el.id !== todo.id))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":""}`}>{todoItem}</li>
            <button className="complete-btn" onClick={completeHandler}>
                Completed
                <i className="fas fa-check"></i>
            </button>
            <button className="delete-btn" onClick={deleteHandler}>
                Remove
                <i className="fas fa-check"></i>
            </button>
        </div>
    )
}

export default AddTodo
