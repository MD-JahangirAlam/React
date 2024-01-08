
import { Routes, Route } from 'react-router-dom'

import './App.css'



// components add here ::::::::::::::::::::::::::::::
import Nav from './components/Nav'
import Register from './components/Register'
import Home from './components/Home'
import Login from './components/Login'
import AuthProtect from './components/AuthProtect'
import Errpage from './components/Errpage'
import About from './components/About'
import Product from './components/product'
import axios from 'axios'
import { useEffect, useState } from 'react'
import UserValueApi from './Hooks/AuthUserValueProvaider'
import Edit from './components/Edit'
import { useDispatch, useSelector } from 'react-redux'
import Contact from './components/Contact'

import {getProduct} from './LocalStore/LocalStore'
import { storeValue } from './toolkitAndredux/createSlice'



function App() {

  const {userValue,setUserValue} = UserValueApi()

  const cartItems = getProduct()
  const Dispatch = useDispatch();

  useEffect(() =>{
    Dispatch(storeValue(cartItems))
  },[])
//  StoreProduct.setProduct({name:'jone', email: 'jone@gmail.com'})
  // const getallUserData = async ()=>{
  //   try {

  //   //   axios.get('http://localhost:3000/').then(response =>{
  //   //   setUserValue( response.data.allUser)
      
  //   // }).catch(err =>{
  //   //   console.log(err);
  //   // })

  //   const response = await axios.get('http://localhost:3000/');

  //   setUserValue(response.data.allUser)
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //   // getallUserData();
  //   // const cartData = useSelector(state => state.user.cartItems);
  //   // console.log(cartData);
  // },[])

  return (
    <>
      <Nav />
      <Routes>
        {/* <Route index element={
          <AuthProtect>
            <Home />
          </AuthProtect>}
        /> */}
        <Route element={<AuthProtect />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/about/:id' element={<Edit/>} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        {console.log('hello')}
        
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Errpage />} />
      </Routes>
    </>
  )
}

export default App
