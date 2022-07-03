// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси

let baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => fetch(baseUrl).then(value => value);

export {getUsers};
