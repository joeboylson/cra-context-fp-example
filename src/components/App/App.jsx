import React from 'react';
import { UserProvider } from '../../context/UserContext';
import Home from '../Home/Home';

const App = () => {
  return (
    <UserProvider>
      <Home/>
    </UserProvider>
  )
}

export default App;