import CardRazasPerros from 'components/CardRazasPerros';
import logo from 'media/logo.png';
import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';

function Index() {
    return (
        <div>
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
            <main>
                <section>
                    <h1>Razas de Perros</h1>
                    <ul className="breedCardContainer">
                        <CardRazasPerros fotoRaza={borderCollie} nombreRaza="Border Collie" paginaPerro='/borderCollie'/>
                        <CardRazasPerros fotoRaza={rhodesian} nombreRaza="Rhodesian" paginaPerro='/rhodesian'/>
                        <CardRazasPerros fotoRaza={borderCollie} nombreRaza="Border Collie" paginaPerro='/borderCollie'/>
                        <CardRazasPerros fotoRaza={rhodesian} nombreRaza="Rhodesian" paginaPerro='/rhodesian'/>
                        <CardRazasPerros fotoRaza={borderCollie} nombreRaza="Border Collie" paginaPerro='/borderCollie'/>
                        <CardRazasPerros fotoRaza={rhodesian} nombreRaza="Rhodesian" paginaPerro='/rhodesian'/>
                    </ul>
                </section>
                <section></section>
            </main>
            <footer></footer>
        </div>
    );
}

export default Index;