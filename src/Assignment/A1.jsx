import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export default function A1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    function factorial(n){
        while(n>1){
            n=n*(n-1);
            n--;
        }
    }
    const expensiveValue = useMemo(()=>{
        return factorial(input),[input]
    }); 
    
    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}