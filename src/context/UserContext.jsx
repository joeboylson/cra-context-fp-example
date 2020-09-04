import React, { useState, useContext } from 'react'
import { tap } from 'lodash/fp';

const UserContext = React.createContext()
const useUserContext = () => useContext(UserContext);


const UserProvider = ({children, loadedUsers}) => {

  const [users, _setUsers] = useState(loadedUsers)
  const setUsers = tap(_setUsers);

  return (
    <UserContext.Provider value={{users, setUsers}}>
      {children}
    </UserContext.Provider>
  )
}


export { UserContext, UserProvider, useUserContext }