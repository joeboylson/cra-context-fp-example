import React, { useRef } from 'react';

const UserItem = ({user, handleUpdateUser}) => {

  const nameRef = useRef(null);

  return (
    <div>
      <p>ID: {user.id}</p>
      <p>NAME: {user.name}</p>
      <input ref={nameRef} type="text"/>
      <button onClick={() => handleUpdateUser(nameRef.current.value)}>UPDATE</button>
      <hr/>
    </div>
  )
}

export default UserItem