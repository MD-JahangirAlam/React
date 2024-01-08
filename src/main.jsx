import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvaider } from './Hooks/AuthProvaider.jsx'
import { UserValueContext } from './Hooks/AuthUserValueProvaider.jsx'

import { Provider } from 'react-redux'
import store from './toolkitAndredux/createTollkitStore.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <UserValueContext>
    <AuthProvaider>
      <Routes>    
        <Route path='/*' element={<App />} />
      </Routes>
      </AuthProvaider>
      </UserValueContext> */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
