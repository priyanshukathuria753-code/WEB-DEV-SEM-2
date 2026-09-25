// import React from 'react'
// class App extends React.Component {
//   constructor() {
// super()

// this.state = {
//   count : 0
// }
//   }
//   componentDidMount() {
//     console.log("Component Mounted")
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     if(nextState.count < 5){
//       console.log("Component Updated")
//       return true
//     }
//     console.log("Hiii")
//     return false
//   }
//   componentDidUpdate(){
//     console.log("component did update")

//   }

//   render() {
//     return (
//     <>
//       <h1>Hello : {this.state.count}</h1>
//       <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//         Click me
//       </button>
//     </>
//     )
//   }
// }
// export default App;

// // class Example extends React.Component {
// //   constructor(){
// //     super()
// //     this.state = {name : "John"}

// //   }
// //   componentDidMount() {
// //     console.log("Component Mounted")
// //   }

// //   render(){
// //     return (
// //       <>
// //       <h1>Hello,{this.state.name}</h1>
// //       </>
// //     )
// //   }
// // }
// // export default Example;

class Timer extends React.Component {
  constructor() {
    super()
    this.state = { counter: 0 }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("Component Unmounted")
  }
}

  render() 
    return (
      <>
        <h1>Timer : {this.state.counter}</h1>
      </>
    )
  

export default Timer;