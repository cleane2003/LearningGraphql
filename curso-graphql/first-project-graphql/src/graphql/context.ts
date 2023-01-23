import fetch from 'node-fetch';

const URL = 'http://localhost:3000';

export const context = () => {
  return {
    getUsers: (path = '/') => fetch(URL + '/users' + path),
    getPosts: (path = '/') => fetch(URL + '/posts' + path),
  };
};
