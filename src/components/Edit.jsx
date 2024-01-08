import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import UserValueApi from '../Hooks/AuthUserValueProvaider';


function Edit() {

    const [currentUserValue, setCurrentUserValue] = useState({})
    const [userValue, setUserValues] = useState({
        name: '',
        email: '',
        userId: ''
    })
    const location = useNavigate()
    const {setUserValue} = UserValueApi()

    const [loding, setLoding] = useState(false)

    const { id } = useParams()
    
    const userCurrentValue = async () =>{
        try {
           const respons = await axios.get(`http://localhost:3000/edit/${id}`)
           setCurrentUserValue(respons.data.currentUserValue);
           setUserValues(userValue => ({...userValue, userId: respons.data.currentUserValue._id}))
           setLoding(true)
        //    console.log(respons.data.currentUserValue._id);
        //    setUserValue(userValue => ({...userValue, name: currentUserValue.userName, email: currentUserValue.userEmail}))
            
        } catch (error) {
            console.log(error);
        }
    }
    // const currentEditValue = userValue.filter(allValue => allValue._id === id);

    useEffect(() =>{
        userCurrentValue()
    }, [])
    
    const [fromMassege, setfromMassege] = useState({
        nameMass: '',
        emailMass: '',
        passwordMass: '',
        conPasswordMass: ''
    })

    useEffect(()=>{

    },[userValue, fromMassege])

    const hendleSubmit = async (e) =>{
        // console.log(userValue.name.length);
        e.preventDefault();
        // if(userValue.name == ''){
        //     setfromMassege(userMass => ({...userMass, nameMass: 'user name is require'}))
        // }else{
        //     setfromMassege(userMass => ({...userMass, nameMass: ''}))
        // }

        // const userRespons = await axios.post('http://localhost:3000/register', {
        //     userValue
        // })

        // console.log(userRespons.data.user.userValue);

        try {
                const respons = await axios.put('http://localhost:3000/useredit', {
                    userValue
                })
                const allUser = respons.data.getAllUser;
                setUserValue(allUser)
                location('/about')
        } catch (error) {
            console.error(error)
        }
        
    }

    
    const focusContent = e =>{
        e.target.value = '';
        setCurrentUserValue({})
    }
    return (
        <>
        {
            loding ? (
                <div className="register-box">
                <div className="register-body">
                    <h2>Edit Now</h2>
                    <div className="from-body">
                        <form onSubmit={hendleSubmit}>
                            <div className="form-grup">
                                <label htmlFor="username">username:</label>
                                <input onFocus={focusContent}
                                 value={userValue.name.length > 0 ? userValue.name : currentUserValue.userName}
                                  onChange={e => setUserValues(userValue => ({ ...userValue, name: e.target.value }))}
                                   type="text" id='username' />
                                {fromMassege.nameMass.length ? <span>{fromMassege.nameMass}</span> : <></>}
                            </div>
                            <div className="form-grup">
                                <label htmlFor="useremail">useremail:</label>
                                <input onFocus={focusContent}
                                 value={userValue.email.length > 0 ? userValue.email : currentUserValue.userEmail}  
                                 onChange={e => setUserValues(userValue => ({ ...userValue, email: e.target.value }))}
                                  type="email" id='useremail' />
                            </div>
                            <div className="form-footer">
    
                                <button type='submit'>edit<i className="fa-regular fa-user"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            ) : (
                <h1>Loding...</h1>
            )
        }
        </>
    )
}

export default Edit