import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import apiContext from '../Hooks/AuthProvaider'
import { useSelector } from 'react-redux'


export default function Nav() {
    const {userContextValue} = apiContext()

    const cartAmaunt = useSelector(state => state.user.cartCount)
    return (
        <div className="header-nav">
            <div className="header-box">
                <div className="header-logo">
                    <h2><span>react</span> App</h2>
                </div>
                <ul className="nav">
                    <li className="nav-items">
                        {/* <a href="/">home</a> */}
                        <Link to='/' >home</Link>
                    </li>
                    <li className="nav-items">
                        {/* <a href="#">about</a> */}
                        <Link to='/about' >about</Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/contact' >contacts</Link>
                        {/* <a href="#">contacts</a> */}
                    </li>
                    <li className="nav-items">
                        {/* <a href="#">product</a> */}
                        <Link to='/product' >product</Link>
                    </li>
                </ul>
                <div className="user-box">
                    <div className="cart-box">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>{cartAmaunt}</span>
                    </div>
                    <div className="search-box">
                        <input type="search" name="" placeholder='search' id="" />
                        <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <Link to='/register' >
                        <i className="fa-solid fa-right-to-bracket"></i>
                        {userContextValue}
                    </Link>
                </div>
            </div>
        </div>
    )
}
