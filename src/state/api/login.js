import axios from '.';

export const login = (data) => {
  return axios({
    method: 'POST',
    url: '/login',
    data,
  });
};

export const loginDemo = (username, password) => {
  return axios
    .post('http://localhost:3000/login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};
