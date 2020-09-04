import { curry } from 'lodash';

const setName = curry((newName, user) => {
    user.name = newName;
    return {...user}
});

const setLoggedIn = curry((loggedIn, user) => {
    user.loggedIn = loggedIn
    return {...user};
});

const setLastUpdatedAt = curry((dateValueOf, user) => {
  user.lastUpdatedAt = dateValueOf
  return {...user};
});

export { setName, setLoggedIn, setLastUpdatedAt }