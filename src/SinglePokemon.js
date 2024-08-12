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
    
    console.log('pokemon details', pokemonDetails);

    return (
        <>Testing Single Pokemon Component</>
    )
}


export default SinglePokemon;