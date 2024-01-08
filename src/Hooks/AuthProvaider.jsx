import { createContext, useContext, useState } from "react";


const userContextProvaider = createContext({});

export function AuthProvaider({children}) {
    const [userContextValue, setUserContextValue] = useState(false)


  return (
    <userContextProvaider.Provider value={{userContextValue, setUserContextValue}} >
        {children}
    </userContextProvaider.Provider>
  )
}

const apiContext = ()=>{
  return useContext(userContextProvaider)
}

export default apiContext


