import React from 'react'
import { useUserContext } from '../../context/UserContext';
import { setName, setLoggedIn, setLastUpdatedAt } from '../../utils/userUtils';
import { pipe } from '../../utils/fp';

const Home = () => {
  
    const {user, setUser} = useUserContext()

    const handleButtonClick = () => pipe(
        setName('TANIA'),
        setLoggedIn(false),
        setLastUpdatedAt(new Date().valueOf()),
        setUser,
      )(user);
  
    return (
      <div>
        name: {user.name} <br/>
        logged in: {user.loggedIn ? 'YES' : 'NO'} <br/>
        updated at: {user.lastUpdatedAt} <br/>
        <button onClick={handleButtonClick}>CHANGE NAME</button>
      </div>
    )
  }

  export default Home;