export class UserApiService {
    _url = 'https://jsonplaceholder.typicode.com/posts'

    getUsers() {
        return fetch(this._url)
            .then(value => value.json())
    }

    getUser(id) {
        return fetch(this._url + '/' + id)
            .then(value => value.json());
    }
}