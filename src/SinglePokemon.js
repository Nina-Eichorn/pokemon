import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePokemon() {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const {id} = useParams();
    
    useEffect(() => {
        const fetchSingleDetails = async () => {
            try {
                const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
                setPokemonDetails(data);
            } catch (err) {
                console.log('Error fetching single pokemon data', err);
                console.error(err);
            }
        }

        fetchSingleDetails();
    }, [id]);

    // console.log('pokemon details', pokemonDetails);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
            <div className="card col-2 mx-auto bg-primary-subtle">
                {pokemonDetails ? (<div>
                    <img
                        src={pokemonDetails.sprites.front_default}
                        alt={pokemonDetails.name}
                        className="card-img-top"
                    />
                    <div className="card-body">
                        <h3 className="card-title text-center">{pokemonDetails.name}</h3>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Height: {pokemonDetails.height}</li>
                            <li class="list-group-item">Weight: {pokemonDetails.weight}</li>
                            <li class="list-group-item">Base Experience: {pokemonDetails.base_experience}</li>
                            <li class="list-group-item">Abilities:{' '}
                            {pokemonDetails.abilities.map((ability) => ability.ability.name).join(', ')}</li>
                            
                        </ul>
                    </div></div>) : (<p>Loading Pokemon Details...</p>)}
                    
            </div>
        </div>
        
    )
}


export default SinglePokemon;