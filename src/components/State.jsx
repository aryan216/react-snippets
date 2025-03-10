import { RecoilRoot,useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "../Atoms/Numcount";

export default function Count(){
  return (
    <div>
      <RecoilRoot>
        <Counter />
        
      </RecoilRoot>
    </div>
  )
}
function Counter(){
  return (
    <div>
      <Render/>
      <Buttons/>
    </div>
  )
}
function Render(){
  const numcount=useRecoilValue(countAtom);
  return(
    <>
      {numcount}
      
    </>
  );
}
function Buttons(){
  const setNumcount=useSetRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>{setNumcount(numcount=>numcount+1)}}>plus</button>
      <button onClick={()=>{setNumcount(numcount=>numcount-1)}}>minus</button>
    </div>
  )

}