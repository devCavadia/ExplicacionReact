function CardRazasPerros(props) {
    return (
        <li className="breedCard">
            <div className="contenedorImagen">
                <img src={props.fotoRaza} alt={props.nombreRaza}/>
            </div>
            <span className="breedTitle">
                {props.nombreRaza}
            </span>
        </li>
    );
}

export default CardRazasPerros;