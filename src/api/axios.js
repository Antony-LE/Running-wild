import axios from 'axios';

export default axios.create({
  baseURL: 'https://runningwild.herokuapp.com',
  withCredentials: true,
});
