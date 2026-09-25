import React, { useState } from "react";

function App() {
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.includes("@krmu")) {
      alert("Please enter a valid email address") ;
    return;
  }

  if (formData.password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }



  const handleEmail = (e) => {
    setFormData(prev) => ({...prev,
      email:e.target.value})
  }
  const handlePassword = (e) => {
    setFormData(prev) => ({...prev,
      password:e.target.value})
  }
  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" value={formData.email} onChange={handleEmail} />
      <input type="password" placeholder="Enter your password" value={formData.password} onChange={handlePassword} />
      <button type="submit">Submit</button>
    </form>
    </>
  )
}
export default App;