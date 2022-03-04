import axios from 'axios';
export const getUserById = async(id) => await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);