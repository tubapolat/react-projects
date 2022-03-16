import axios from 'axios';

export async function getUserById(id) {
    return (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data;
}

export async function getPostsByUserId(userId) {
    return (await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).data;
}