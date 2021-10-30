import Header from '../src/Componentes/header';
import Bunner from './Componentes/bunner';
import Footer from './Componentes/footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
       <Bunner>
         <h1>WELCOME TO US!!!</h1>
         <button>Clique aqui</button>
       </Bunner> 
        <Footer>Esse site tem os direitos reservado ®</Footer>
      </header>
    </div>
  );
}

export default App;
