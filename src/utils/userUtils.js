import { curry } from 'lodash/fp';

export const setName = curry((name, user) => ({...user, name}) );

export const setNameById = curry((name, id, users) => {
    return users.map(user => {
        if (user.id !== id) return user;
        return setName(name, user)
    })
});