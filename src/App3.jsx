import {useState} from "react"
export default function App3(){
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [todos,setTodos]=useState([]);
  function addTodo(){
    setTodos([...todos,{title,description}]);
    setTitle("");
    setDescription("");
  }
  return(
    <div>
      <input type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/><br/>
      <input type="text" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}}/><br/>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo=>(<Todos title={todo.title} description={todo.description} />))}
    </div>
  );
}
function Todos({title,description}) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}
