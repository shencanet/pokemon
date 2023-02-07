import './sass/Card.scss'

const Card = () => {
    return(
        <div className="card">
            <p className="card__name"> David</p>
            
            <div className="card__circle"></div>
            <img className="card__img" src="" alt="pokemon img" />

        </div>
    )

}

export {Card}