import { use } from "react";
import { useEffect, useRef, useState } from "react";

function App(){
  // const myRef = useRef(null)

  // useEffect(()=>{
  //   myRef.current.focus();
  //   myRef.current.value ="Type and stuff"
  // },[])

  // const[input,setInput]=useState("")
  // const handleChange = (e)=>{
  //   setInput(e.target.value)
  // }
  // const submitForm = (e)=>{
  //   e.preventDefault()
  //   console.log(input)
  // }

  const formRef = useRef("")

  useEffect(()=>{
    formRef.current.value = "Hello Uncle"
  },[])


  return(
    <>
    <form onSubmit={submitForm}>
      {/* <input type="text" value={input} onChange={handleChange} /> */}
      <input type="text" defaultValue={"Alex"} ref={formRef} />

      <button type="submit">Submit</button>



    </form>


    {/* <input type="text" ref={myRef} /> */}
    </>
  )
}
export default App;