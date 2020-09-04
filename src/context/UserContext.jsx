import React, { useState, useContext } from 'react'
import { tap } from '../utils/fp';

const UserContext = React.createContext()
const useUserContext = () => useContext(UserContext);


const UserProvider = ({children}) => {

  const [user, _setUser] = useState({ name: 'Tania', loggedIn: true, lastUpdatedAt: new Date().valueOf() })
  const setUser = tap(_setUser);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}


export { UserContext, UserProvider, useUserContext }