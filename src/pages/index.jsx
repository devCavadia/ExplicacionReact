import CardRazasPerros from 'components/CardRazasPerros';
import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';

function Index() {
    return (
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros fotoRaza={borderCollie} nombreRaza="Border Collie" paginaPerro='/bordercollie'/>
                <CardRazasPerros fotoRaza={rhodesian} nombreRaza="Rhodesian" paginaPerro='/rhodesian'/>
                <CardRazasPerros fotoRaza={borderCollie} nombreRaza="Border Collie" paginaPerro='/bordercollie'/>
                <CardRazasPerros fotoRaza={rhodesian} nombreRaza="Rhodesian" paginaPerro='/rhodesian'/>
            </ul>
        </section>
    );
}

export default Index;