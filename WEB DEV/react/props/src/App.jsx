import { useState } from "react";
import Child from "./Component/Child";

function App(){
  const [count,setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
    <h1>Count : {count}</h1>
    {/* <Child count={count}/> */}
    <button onClick={increment}>+</button>
    </>
  )
}

export default App;