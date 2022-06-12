import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Backend/Pages/Layout/Header';

const Register = () => {

  // if authenticated then didn't access the register route
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history("/add");
    }
  }, [])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  async function signUp() {
    let data = { name, email, password }
    let result = await fetch("http://localhost:8000/api/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    result = await result.json();
    console.warn("result", result)
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/add");
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Sign Up</h1>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"></input>
        <br />
        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"></input>
        <br />
        <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"></input>
        <br />
        <button className="btn btn-primary" onClick={signUp}>Sign Up</button>

      </div>
    </div>
  )
}

export default Register