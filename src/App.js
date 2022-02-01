import logo from './media/logo.png';
import './styles/styles.css';
import borderCollie from './media/borderCollie.jpg'
import rhodesian from './media/rhodesian.jpg'

function App() {
  return (
    <div className="App">
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
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="imagen Border Collie"/>
                    </div>
                    <span className="breedTitle">
                        Border Collie
                    </span>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={rhodesian} alt="imagen Rhodesian"/>
                    </div>
                    <span className="breedTitle">
                        Rhodesian
                    </span>
                </li>
            </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
