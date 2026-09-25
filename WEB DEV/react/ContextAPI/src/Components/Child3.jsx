import { useContext } from "react"
import MyStore from "./MyStore"


function Child3(){
    let { name, age } = useContext(MyStore);
    return(
        <div>Child3
            <h1>Name: {name}</h1>
            <span>Age: {age}</span>
        </div>

    )
}
export default Child3;