import React, { useEffect, useState } from 'react'
import '../assets/style.css'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default function Register() {
    const [userValue, setUserValue] = useState({
        name: '',
        email: '',
        password: '',
        conPassword: ''
    })

    const [fromMassege, setfromMassege] = useState({
        nameMass: '',
        emailMass: '',
        passwordMass: '',
        conPasswordMass: ''
    })


    useEffect(()=>{

    },[userValue, fromMassege])



    const hendleSubmit =  (e) =>{
        // console.log(userValue.name.length);
        e.preventDefault();
        // if(userValue.name == ''){
        //     setfromMassege(userMass => ({...userMass, nameMass: 'user name is require'}))
        // }else{
        //     setfromMassege(userMass => ({...userMass, nameMass: ''}))
        // }

        // important below

        // try {
        //     const userRespons = await axios.post('http://localhost:3000/register', {
        //         userValue
        //     })
    
        //     console.log(userRespons);
            
        // } catch (error) {
        //     console.log(error);
        // }


    

        
    }

    return (
        <div className="register-box">
            <div className="register-body">
                <h2>sign up</h2>
                <div className="from-body">
                    <form onSubmit={hendleSubmit}>
                        <div className="form-grup">
                            <label htmlFor="username">username:</label>
                            <input onChange={e => setUserValue(userValue => ({...userValue, name: e.target.value}))} type="text" id='username' />
                            {fromMassege.nameMass.length ? <span>{fromMassege.nameMass}</span> : <></>}
                            {/* {useSelector((state) => state.user)} */}
                        </div>
                        <div className="form-grup">
                            <label htmlFor="useremail">useremail:</label>
                            <input onChange={e => setUserValue(userValue =>({...userValue, email: e.target.value }))} type="email" id='useremail' />
                        </div>
                        <div className="form-grup">
                            <label htmlFor="userpassword">userpassword:</label>
                            <input onChange={e => setUserValue(userValue => ({...userValue, password: e.target.value}))} type="password" id='userpassword' />
                        </div>
                        <div className="form-grup">
                            <label htmlFor="confurmpass">confurmpass:</label>
                            <input onChange={e => setUserValue(userValue => ({...userValue, conPassword: e.target.value}))} type="password" id='confurmpass' />
                        </div>
                        <div className="form-footer">
                            
                            <button type='submit'>sign up<i className="fa-regular fa-user"></i></button>
                            <p>already you have an account</p>
                            <Link to='/login' >sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
