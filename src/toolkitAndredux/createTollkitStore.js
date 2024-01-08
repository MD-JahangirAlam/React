// import {configureStore} from '@reduxjs/tollkit'


import {configureStore} from '@reduxjs/toolkit';

import userValueReducer from './createSlice';

const store = configureStore({
    reducer: {
        user: userValueReducer,
    }
})

export default store;