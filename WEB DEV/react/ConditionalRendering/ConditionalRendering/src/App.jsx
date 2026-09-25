
function App() {
  let flag = false

  return (
    <>
      {flag ? (<h1>Hello Ternary true</h1>):<p> Hello Ternay false</p>
    }
    </>
  )
}

export default App;

