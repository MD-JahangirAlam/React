import React from 'react'
import ProductData from '../LocalData/LocalData'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, cartCountValue } from '../toolkitAndredux/createSlice'
import { setProduct } from '../LocalStore/LocalStore'

function Product() {
    const cartList = useSelector(state=> state.user.cartItems);
    const dispatch = useDispatch();
    const productCart = (id) =>{
        setProduct(cartList);

        const cartUser = ProductData[id-1];
        dispatch(addUser(cartUser));
    }
    setProduct(cartList);

  return (
    <div className='product-content'>
        <div className="product-header">
            <h2>your product list here</h2>
        </div>
        <div className="product-showcase">
            {
                ProductData.map((Items, index)=>{
                    return (
                        <div className="product-items" key={index}>
                            <img src={Items.productImg} alt={Items.ProductName} />
                            <h4>{Items.ProductName}</h4>
                            <button onClick={() => productCart(Items.id)}>cart now</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Product