

// value provaider context

import { createContext, useContext, useState } from "react";

const userValueProvaiderContext = createContext({});


export const UserValueContext = ({children}) =>{
  const [userValue, setUserValue] = useState([])

  return(
    <userValueProvaiderContext.Provider value={{userValue, setUserValue, hello: 'hello'}}>
      {children}
    </userValueProvaiderContext.Provider>
  )
}
 const UserValueApi = () =>{
  return useContext(userValueProvaiderContext)
}

export default UserValueApi