
class StoreProduct {
    static setProduct(getProduct){
        localStorage.setItem('userCart', JSON.stringify(getProduct));
    }
    static getProduct(){
        const cartItems = JSON.parse(localStorage.getItem('userCart'));
        return cartItems;
    }
}


export const {setProduct, getProduct} = StoreProduct;