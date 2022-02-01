import {Link} from 'react-router-dom'; 

function CardRazasPerros(props) {
    return (
        <li className="breedCard">
            <Link to={props.paginaPerro}>
                <div className="contenedorImagen">
                    <img src={props.fotoRaza} alt={props.nombreRaza}/>
                </div>
            </Link>
            <span className="breedTitle">
                {props.nombreRaza}
            </span>
        </li>
    );
}

export default CardRazasPerros;