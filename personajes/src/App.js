import './App.css';
import Perfil from './componentes/perfil';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis programadores favoritos son:</h1>
        <Perfil
          nombre='Brais'
          pais='España'
          imagen='Perfil-brais.png'
          cargo='Desarrollador'
          empresa='MoureDev'
          resena='"Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev."'
        />
          <Perfil
          nombre='Facundo Sánchez'
          pais='Mexico'
          imagen='Perfil-facundo.png.'
          cargo='Desarrollador'
          empresa='530 developers'
          resena='"Se destaca por su arduo compromiso con la expansión de sus conocimientos y su ferviente entusiasmo por la innovación tecnológica."'
        />
        <Perfil
          nombre='Luz Leon'
          pais='Colombia'
          imagen='Perfil-luz.png.'
          cargo='Desarrolladora'
          empresa='ldlm soluciones'
          resena='"Desarrolladora en crecimiento se distingue por su incansable búsqueda de conocimiento y su pasión por la innovación tecnológica."'
        />
        
      </div>
    </div>
  ); 
}

export default App;
