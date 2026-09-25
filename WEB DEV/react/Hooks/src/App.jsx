import { use, useEffect,useState } from "react";
function App(){

  const [count, setCount] = useState(0)
  const [name, setName] = useState("Alex")
  const [task, setTask] = useState("Done")
  // const [Arr, setArr] = useState([1,2,3,4,5])
  // const [obj, setObj] = useState({name:"Alex", age: 300})

  const increment = () => {
    setCount(count + 1);
  }

  const nameChangeFunction = () => {
    setName("John")
  }

  const taskChangeFunction = () => {
    setTask("Not Done")
  }

  useEffect(()=>{
    console.log("Hello Mounting")
  })

  return(
    <>
    <h1>Count : {count}</h1>
    <button onClick={increment}>+</button>
    <h1>Name : {name}</h1>
    <button onClick={nameChangeFunction}>Name Change</button>
    <h1>Task : {task}</h1>
    <button onClick={taskChangeFunction}>Task Change</button>
    
    </>
  )
}
export default App;