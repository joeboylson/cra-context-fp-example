import React from 'react'
import { useUserContext } from '../../context/UserContext';
import { setNameById } from '../../utils/userUtils';
import { pipe } from '../../utils/fp';
import UserItem from './UserItem';

const Home = () => {
  
    const {users, setUsers} = useUserContext()

    const handleUpdateUser = (id, name) => pipe(
      setNameById(name, id),
      setUsers,
    )(users);

    return (
      <div>
        { users.map(user => <UserItem user={user} handleUpdateUser={(name) => handleUpdateUser(user.id, name)}/>) }
      </div>
    )
  }

  export default Home;