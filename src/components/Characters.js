// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів


import React from 'react';

function Characters(props) {
const {id,name,status,species,gender,image} = props;
    return (
        <div>
            <li>id:{id}</li>
            <li>name:{name}</li>
            <li>status:{status}</li>
            <li>gender:{gender}</li>
            <img src={image} alt={name}/>

        </div>
    );
}

export default Characters;