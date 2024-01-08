import React from 'react'
import '../assets/style.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="login-box">
            <div className="register-body">
                <h2>sign in</h2>
                <div className="from-body">
                    <form action="#">
                        <div className="form-grup">
                            <label htmlFor="useremail">useremail:</label>
                            <input type="email" id='useremail' />
                        </div>
                        <div className="form-grup">
                            <label htmlFor="userpassword">userpassword:</label>
                            <input type="password" id='userpassword' />
                        </div>
                        <div className="form-footer">
                            <button>sign up<i className="fa-regular fa-user"></i></button>
                            <p>if you don't have account</p>
                            <Link to='/register' >sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
