import React from 'react';

function Characters(props) {
    const {name, surname, age, info, photo, alt} = props;
    return (
        <div>
            <h2>name: {name}</h2>
            <h2>surname: {surname}</h2>
            <li>age: {age}</li>
            <li>info: {info}</li>
            <img src={photo} alt={alt}/>
        </div>
    );
}

export default Characters;

