import React,{ useState }  from 'react'
import { useEffect } from 'react';
import '../MyToDoApp/App.css'


function ToDoList() {


    const[todos, setTodos]=useState([]);
    const[todo, setTodo]=useState("");

    const[todoEdit , setTodoEdit]=useState(null);
    const[editText, SetTodoText]=useState("");

    useEffect(()=>{
        const Mytodo=JSON.stringify(todos)
        localStorage.setItem("users", Mytodo)
    },[todos])


    const handleSubmit=(e)=>{
        e.preventDefault();

    

    const newTodo={
        id:new Date().getTime(),
        text:todo,
        completed:true
        
    }
    setTodos([...todos].concat(newTodo))
    setTodo("")
}

function deleteTodo(id){
    const Updatedtodos=[...todos].filter((todo)=>todo.id!=id )
    setTodos(Updatedtodos)

}

function editTodo(id){
    const Updatedtodos=[...todos].map((todo)=>{
        if (todo.id === id) {
            todo.text=editText
            
        }
        return todo
    })
    setTodos(Updatedtodos)
    setTodoEdit(null)
    SetTodoText("")
}



  

return (
    
        <>
        <div className="MainDiv">
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}
                className="InputType" placeholder="Enter your Todo here"/>
                 <button type="submit" className="BtnType">Add Todo</button>
            </form>

            {
            todos.map((todo)=><div key={todo.id}>
                {
                    todoEdit === todo.id ? (
                    <input type="text"    
                    onChange={(e)=>SetTodoText(e.target.value)} 
                     value={editText}
                     className="EditInput"/>
                    ): ( 
                    <div> {todo.text} </div>
                     )
                    
                }
              
                <button onClick={()=>deleteTodo(todo.id)}  className="deleteType">Delete</button>

                {
                    todoEdit === todo.id ? (
                        <button onClick={()=>editTodo(todo.id)}  className="BtnType" > submit </button>

                    ):(
                        <button onClick={()=>setTodoEdit(todo.id)}  className="BtnType">Edit text</button>

                    )
                }

               
            </div>
            )
            }


        </div>
        </>
    )
}

export default ToDoList
