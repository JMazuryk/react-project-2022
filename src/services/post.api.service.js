import axios from "axios";

let axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

const getPosts = () => axiosInstance.get('/posts').then(value => value);

const getPost = (id) => axiosInstance.get('/posts/'+id).then(value => value.data);

const getPostComments = (id) => axiosInstance.get('/posts'+id +'/comments').then(value => value);

export {getPosts,getPost,getPostComments}