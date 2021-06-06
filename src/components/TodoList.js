import React from 'react'
import AddTodo from './AddTodo'
import './TodoList.css'
function TodoList({ setTodos, todoList}) {


    return (
        <div className="todoContainer">
            <ul className="todos">
                {

                   
                    todoList.map((item) =>
                        (
                        <AddTodo className="todo"
                            setTodos={setTodos}
                            todos={todoList}
                            key={item.id}
                            todoItem={item.text}
                            todo={item}
                           
                        />
                        )
                    )
                    
                   }
                
                

            </ul>
        </div>
    )
}

export default TodoList
