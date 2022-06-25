
import React from 'react';
import Characters from "./components/Characters";

function App() {

    return (
        <div>
            <Characters
                id={1}
                name={'Rick Sanchez'}
                status={'Alive'}
                gender={'Male'}
                alt={'Rick Sanchez'}
                image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}
            />
            <Characters
                id={2}
                name={'Morty Smith'}
                status={'Alive'}
                gender={'Male'}
                alt={'Morty Smith'}
                image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}
            />
            <Characters
                id={3}
                name={'Summer Smith'}
                status={'Alive'}
                gender={'Female'}
                alt={'Summer Smith'}
                image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}
            />
            <Characters
                id={4}
                name={'Beth Smith'}
                status={'Alive'}
                gender={'Female'}
                alt={'Beth Smith'}
                image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}
            />

        </div>

    );
}

export default App;

