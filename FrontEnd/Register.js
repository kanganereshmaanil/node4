import React from 'react'
import { Link } from 'react-router-dom'
import './Global.css'

const Register = () => {
  return (
    <div>
        <div className='register-container'>
            <h2>SignUp Form</h2><br/>
            <form action="http://localhost:3001/register" method="post">
                <input type="text" name="name" placeholder="Name" required /><br /><br />
                <input type="email" name="email" placeholder="Email" required /><br /><br />
                <input type="password" name="password" placeholder="Password" required /><br /><br />
                <input type="username" name="username" placeholder="Username" required /><br /><br />
                <button>Register</button>
                <Link to="/login">Already have an account ?</Link><br/><br/>
            </form>
        </div>
    </div>
  )
}

export default Register
