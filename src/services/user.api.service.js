import axios from "axios";

let axiosInstance = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com/users'
})

const getUsers = () => axiosInstance.get('');

const getUserPosts = (id) => axiosInstance.get (`/${id}/posts`)

export {getUsers,getUserPosts};

