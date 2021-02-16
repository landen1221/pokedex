import './PokemonCard.css'

const PokemonCard = ({pokemonID, name, type, baseEq}) => {
    let imgSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonID + '.png'
    return (
        <div className="card">
            <p className={type}>{name}</p>
            <img src={imgSrc} alt={`Image of ${name}`} />
            <p>Type: {type}</p>
            <p>EXP: {baseEq}</p>
        </div>
    )
}

export default PokemonCard;