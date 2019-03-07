import React from 'react';
import userResources from './userResource';

const UserList = () => {
  // perfect code reuse !! :)
  const resources = userResources('users');

  return (
    <ul>
      {resources.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default UserList;