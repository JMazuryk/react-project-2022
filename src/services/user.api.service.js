let baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return fetch(baseUrl).then(value => value.json());
}
// const getUsers = () => fetch(baseUrl).then(value => value.json()); -спрощена версія-inline

const getUser = (id) => fetch(baseUrl + '/' + id).then(value => value.json());
//варіант асинхронності async:
// const getUser = async (id) => {
//     let user = await fetch(baseUrl + '/' + id).then(value => value.json());
//     return user;
// }
const getUserPosts = (id) => fetch(baseUrl+'/'+id+'/posts').then(value => value.json());

export {getUser,getUsers,getUserPosts};