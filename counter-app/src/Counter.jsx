import { useState } from "react";
import './Counter.css'

function Counter(){
    const [x,setX] = useState(0)
    return(
        <div className="Counter_app">
            <h1> Counter App</h1>
          <h3 id="number">{x} </h3>
           <div >
           <button onClick={()=> setX(x+1)} id="btn1">Increement</button>
            <button onClick={()=>setX(x-1)} id="btn2">Decreement</button>
           </div>
        </div>
    )

}
export default Counter;