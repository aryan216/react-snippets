import React, { useState, useEffect } from "react";
import axios from "axios";
//"https://sum-server.100xdevs.com/todos"
// Correctly capitalize the component name
function Todo({ id }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(function (response) {
        setTodos(response.data.todo);
      });
  }, [id]);
  return (
    <div>
      id: {id}
      <h1>{todos.title}</h1>
      <p>{todos.description}</p>
    </div>
  );
}

function App() {
  const [bid, setBid] = useState(1);
  return (
    <div>
      <button onClick={() => setBid(1)}>1</button>
      <button onClick={() => setBid(2)}>2</button>
      <button onClick={() => setBid(3)}>3</button>
      <button onClick={() => setBid(4)}>4</button>
      <Todo id={bid} />
    </div>
  );
}
export default App;
