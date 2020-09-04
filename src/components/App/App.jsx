import React from 'react';
import { UserProvider } from '../../context/UserContext';
import UserList from '../User/UserList';

const App = ({loadedUsers}) => {
  return (
    <UserProvider loadedUsers={loadedUsers}>
      <UserList/>
    </UserProvider>
  )
}

export default App;