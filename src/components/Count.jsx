import { useContext, useState } from "react"
import { Context } from "./Context"
export default function Count(){
  const [numcount,setNumcount]=useState(0);
  return (
    <div>
      <Context.Provider value={numcount}>
      <Counter setNumcount={setNumcount}/>
      </Context.Provider>  
    </div>
  )
}

function Counter({setNumcount}){
  return (
    <div>
      <Render/>
      <Buttons  setNumcount={setNumcount}/>
    </div>
  )
}
function Render(){
  const numcount=useContext(Context);
  return(
    <>
      {numcount}
    </>
  );
}
function Buttons({setNumcount}){
  const numcount=useContext(Context);
  return(
    <div>
      <button onClick={()=>{setNumcount(numcount+1)}}>plus</button>
      <button onClick={()=>{setNumcount(numcount-1)}}>minus</button>
    </div>
  )
  
}