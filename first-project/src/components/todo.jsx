import React, { useEffect, useRef, useState } from 'react'
import './CSS/todo.css'
import Todoitems from './Todoitems';

let count=0;

const todo = () => {

    const[todos,setTodos]=useState([]);
    const inputRef=useRef(null);
    
    const add=()=>{
       setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}])
       inputRef.current.value="";
       localStorage.setItem("todos_count",count)

    }

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todos_count")
    },[])

    useEffect(()=>{
      setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos",JSON.stringify(todos))
      }, 100);
    },[todos])

  return (
    <div className='todo'>
        <div className="todo-header">Todo list</div>
        <div className="todo-add">
            <input ref={inputRef} type="text" placeholder='add your task' className='todo-input'/>
            <div onClick={()=>add()} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((todo,index)=>{
                return <Todoitems no={todo.no} settodos={setTodos} display={todo.display} text={todo.text} key={index}/>
            })}
        </div>
    </div>
  )
}

export default todo