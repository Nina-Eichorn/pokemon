import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function AllPokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        let getPokemon = async () => {
        try{
            const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setPokemon(data.results);
            setNextPage(data.next);
            return data.results;
        } catch(err) {
            console.error(err);
        }
    }
    getPokemon();
    }, [])

    let loadMorePokemon = async () => {
        try {
            let { data } = await axios.get(nextPage);
            setPokemon((prevList) => [...prevList, ...data.results])
            setNextPage(data.next)
        } catch (err) {
            console.error(err);
            console.log('Error loading more pokemon ', err);
        }
    }
    

    return (
        <>
            
                <div className='container-fluid mt-4 d-flex justify-content-center align-items-center'>
                    <div className='row justify-content-center'>
                        {pokemon.map((poke) => {
                            const pokemonId = poke.url.split('/')[6];
                            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
                            return (
                                <div key={poke.name} className="card col-sm-2 mb-4 mx-3">
                                    <Link to={`/pokemon/${pokemonId}`}>
                                        <img src={imageUrl}
                                            alt={poke.name}
                                            className='card-img-top'
                                        />
                                    <div className='card-body'>
                                        <h3 className='card-title text-center'>{poke.name}</h3>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                    <button className="btn btn-warning d-grid gap-2 col-6 mx-auto mb-4 mt-3" onClick={() => loadMorePokemon()}>Load More Pokemon</button>
        </>
    )
}

export default AllPokemon;