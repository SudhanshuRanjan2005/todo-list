import React from 'react'
import {TodoItem} from "./TodoItem";
import "../App.css"

export const Todos = (props) => {
    return (   
        <div className="container">
            <h3 className='text-center alert alert-primary my-3' role='alert'>Todos List</h3>
            
            {props.todos.length===0?
                    <div className='alert alert-danger' role='alert'>
                      No Todos to Display
                    </div>: 
            props.todos.map((todo)=>{
                return (
                    <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/> </>)
            })}
        </div>
    )
}
