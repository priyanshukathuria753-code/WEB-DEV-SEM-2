// import Compo1 from "./component/Compo1";
// function App(){
//   return(

//     <Compo1 />
//   )
// }

// export default App

import {userstate} from "react";
import Child from "./component/Child";

function App(){
  const [name, setCount] = userstate("One way binding")

  return(
    <>
    <h1>Hello Students</h1>
    <p>Hello Para</p>
    <Addition/>
    <Child val={count} name={"Students"}/>
    </>
  )
}

export default App