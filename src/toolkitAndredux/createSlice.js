import { createSlice } from "@reduxjs/toolkit";


const userValue = createSlice({
    name: 'user',
    initialState: {
        cartItems: [],
        cartCount: 0,
        totalAmaunt: 0
    },
    reducers: {
        addUser: (state, action)=>{
            const cartMatch = state.cartItems.find(items => items.id === action.payload.id);
            if(cartMatch){
                console.log('hay it is match');
                return
            }
            const userContent = action.payload;

            state.cartItems.push(userContent);

            let cartAmaunt = 0;
                for (let index = 0; index < state.cartItems.length; index++) {
                    
                const element = state.cartItems[index].amaunt;
                cartAmaunt = cartAmaunt + element;
                
            }
            state.cartCount = cartAmaunt
            
        },
        cartCountValue: (state, action) =>{

            state.cartItems = action.payload.cartUpdateValue;
            let cartAmaunt = 0;
                for (let index = 0; index < state.cartItems.length; index++) {
                    
                const element = state.cartItems[index].amaunt;
                cartAmaunt = cartAmaunt + element;
                
            }
            state.cartCount = cartAmaunt;
            
        },

        // for deleting cart items here 
        deleteCartItems: (state, action) =>{
            console.log(action.payload);
            state.cartItems = action.payload;
            let cartAmaunt = 0;
                for (let index = 0; index < state.cartItems.length; index++) {
                    
                const element = state.cartItems[index].amaunt;
                cartAmaunt = cartAmaunt + element;
                
            }
            state.cartCount = cartAmaunt;

        },
        storeValue: (state, action)=>{
            state.cartItems = action.payload;
            let cartAmaunt = 0;
            for (let index = 0; index < state.cartItems.length; index++) {
                
            const element = state.cartItems[index].amaunt;
            cartAmaunt = cartAmaunt + element;
            
        }
        state.cartCount = cartAmaunt;
        }
    }
})

export const {addUser, cartCountValue, deleteCartItems, storeValue} = userValue.actions;


export default userValue.reducer;