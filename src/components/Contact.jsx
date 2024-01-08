import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartCountValue, deleteCartItems } from '../toolkitAndredux/createSlice';
import { setProduct } from '../LocalStore/LocalStore';

function Contact() {
    const cartList = useSelector(state => state.user.cartItems);
    const dispatch = useDispatch();

    const deleteProduct = (id) =>{
        const currentCart = cartList.filter(cartItems => cartItems.id !== id);
        dispatch(deleteCartItems(currentCart));
        setCartAmaunt(cartList);
    }

    const cartAmauntValue = (e,currentId,currentIndex ) =>{
        
        let cartAmauntControl;
        
        const currentItems = cartList.find(items => items.id == currentId);
        const {ProductName, amaunt, productImg, id} = currentItems;
        let cartUpdate = cartList.map(items =>items);

        

        
        if(e == 'inc'){
            cartAmauntControl = amaunt + 1;
        }
        if(e == 'dec'){
            if(amaunt == 1){
                cartUpdate = cartUpdate.filter(items => items.id !== currentId);
                dispatch(cartCountValue({cartUpdateValue: cartUpdate}));
                return
            }
            cartAmauntControl = amaunt - 1
        }
        const cart = {
            ProductName: ProductName,
            amaunt: cartAmauntControl,
            productImg: productImg,
            id: id
        }

        // const currentCartIndex = cartUpdate.indexOf(items=> items.id == currentIndex);
        cartUpdate.splice(currentIndex, 1, cart);
        
        dispatch(cartCountValue({cartUpdateValue: cartUpdate}));
        // setCartAmaunt(cartAmaunt + 1);
        // console.log(cartUpdate);
    }
    useEffect(()=>{setProduct(cartList)},[cartList]);
  return (
    <div className='cart-content'>
        <h1>all product cart list</h1>
        <div className="cart-body">
            {!cartList.length ? <h1>you did not buy any product</h1> :
                cartList.map((items, index) =>{
                    return(
                        <div key={index} className="cart-body-items">
                            <div className="cart-product-items">
                                <div className="cart-product-img">
                                    <img src={items.productImg} alt="" />
                                </div>
                                <div className="product-title">
                                    <h4>{items.ProductName}</h4>
                                    <h5>{items.amaunt}</h5>
                                </div>
                            </div>
                            <div className="cart-user">
                                <i  onClick={() => cartAmauntValue('inc',items.id,index)} className="fa fa-angle-up" aria-hidden="true"></i>
                                    <span>{items.amaunt}</span>
                                <i onClick={() => cartAmauntValue('dec',items.id,index)} className="fa fa-angle-down" aria-hidden="true"></i>
                            </div>
                            <div onClick={() => deleteProduct(items.id)} className="delete-btn">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Contact;