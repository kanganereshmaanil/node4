import React from 'react'
import './Global.css'

const Login = () => {
  return (
    <div>
        <div className='Login-container'>
            <h2>Login Form</h2><br/>
            <form action="http://localhost:3001/login" method="post">
                <input type="username" name="username" placeholder="Username" required /><br /><br />
                <input type="password" name="password" placeholder="Password" required /><br /><br />
                <button>Submit</button>
                <div className='form-bottom'>
                    <div className="left">
                        <input type="checkbox" id="check" style={{width:"13px",marginTop:"-11px"}}/>&nbsp;
                        <label htmlFor='check'>Remember me</label>
                    </div>
                    <div className="right">
                        <a href="/">forgot password?</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login