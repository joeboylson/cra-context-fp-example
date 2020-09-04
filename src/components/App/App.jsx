import React from 'react';
import { UserProvider } from '../../context/UserContext';
import UserList from '../UserList/UserList';

const App = ({loadedUsers}) => {
  return (
    <UserProvider loadedUsers={loadedUsers}>
      <UserList/>
    </UserProvider>
  )
}

export default App;