import React, { useState, useEffect } from "react";
function Producto() {
    const [rickMortyCharacters, setCharacters] = useState([]);
    const [actualPage, setPage] = useState(1);
    useEffect(() => {
        console.log('didMount')
        fetch("https://rickandmortyapi.com/api/character?page=" + actualPage )
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        return () => console.log('se actualizo');
    }, [rickMortyCharacters]);  

    const nextPage = async () => {
        await setPage(actualPage + 1);
        console.log("https://rickandmortyapi.com/api/character?page=" + actualPage );
        fetch(`https://rickandmortyapi.com/api/character?page=${actualPage}` )
        .then( response => response.json())
        .then( data => setCharacters(data.results))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1> Rick and Morty </h1>
            <ul>
                {   rickMortyCharacters.length < 0 && <p>Cargando..</p> }
                {    
                    rickMortyCharacters.map((oneCharacter, i) => {
                        return <li key= {i} > 
                                    <img src= {oneCharacter.image} width="120" />
                                    <p>{ oneCharacter.name } </p>
                                </li>
                })
                }
            </ul>
            <button onClick = {nextPage} >next page</button>
        </div>
    )
}
export default Producto;