import logo from 'media/logo.png';

const Header = () => {
    return(
        <header>
            <ul className="navbar">
                <li>
                    <img src={logo} alt="imagen" className="logo"/>
                </li>
                <li>
                    <button className="button mainButton">Nuevo post</button>
                </li>
                <li>
                    <div className="buscar">
                        <input placeholder="Buscar una raza" type="" name="" id=""/>
                        <i className="fas fa-search button iconoBusqueda"></i>
                    </div>
                </li>
                <li>
                    <button className="button mainButton">Registro</button>
                </li>
                <li>
                    <button className="button secButton">Login</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;