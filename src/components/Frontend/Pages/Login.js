import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Backend/Pages/Layout/Header'

const Login = () => {

  const history = useNavigate();

  // if authenticated then didn't access the login route
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history("/add");
    }
  }, [])

  return (
    <div>
      <Header />
      Login
    </div>
  )
}

export default Login