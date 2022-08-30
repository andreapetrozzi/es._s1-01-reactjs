import logo from './logo.svg';
import './App.css';
import ImageComponent from './components/ImageComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <p>Corso di ReactJS</p>

        <ButtonComponent text="Clicca qui" href="https://reactjs.org" className="link" />
        <hr/>
        <ImageComponent src="developer.jpg" alt="mountains" width="800px" />
        <hr />
        
      </header>
    </div>
  );
}

export default App;