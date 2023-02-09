"use client";
import { log } from "console";
import { useState } from "react";
import { setOriginalNode } from "typescript";
import { compileFunction } from "vm";

export default function TodoList() {
    const [todo, setTodo]=useState("");
    const [todos, setTodos] = useState([
        { todoText: "PIAIC COURSE 1", completed: false },
        { todoText: "PIAIC COURSE 2", completed: true },
        { todoText: "PIAIC COURSE 3", completed: false },
        { todoText: "PIAIC COURSE 4", completed: true }
    ])
    const onClickHandler = ((myEvent: any) => {
        const newTodos= todos.map((todo) => {
             //console.log("myEvent :", myEvent);
            if (todo.todoText == myEvent.todoText) {
                todo.completed = !myEvent.completed
            }
            return todo
        });
        setTodos(newTodos)

        
        // const addToDo =() => {
        //   const addItems = {itemText: items, completed:false}  
        //   const newItems = [...item, addItems]
        //} 


    });
    const addTodo = () =>{
        const newTodo ={todoText : todo, completed:false}
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setTodo("")
    };
    
    
    const deleteTodo=(myTodo:any)=>{
const newTodos = todos.filter((todo)=>{
    if(todo.todoText== myTodo.todoText)
    return false;
    return true;
});
setTodos(newTodos);
    };
    return (
        <div style={{ width: 700, backgroundColor: "silver" }}>
<br />
             <input style={{ marginLeft:150, padding:4}} type="text" value={todo} onChange={(e) => { setTodo(e.target.value); }} />
            <button style={{ padding:"4", width:"100"}} onClick={addTodo} > Add</button> 
            <ul style={{ marginLeft: 100, listStyleType: "none", padding: 10 }}>

                {todos.map((elm) => {
                    return <li style={{
                        color: elm.completed ? "green" : "maroon",
                        padding: 10,
                        fontFamily: "sans-serif",
                        fontSize: 18
                    }}
                        key={elm.todoText}>
                        <input type="checkbox" checked={elm.completed} onChange={() => { onClickHandler(elm) }} style={{ marginRight: 20 }} />
                        {elm.todoText}

                    <button style={{content: " "}} onClick={()=>{deleteTodo(elm)}}> {" "}Delete  </button>
                    </li>
                })}
            </ul>
        </div>
    );
}