import './App.css';
import logoImg from './img/logo.svg';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logo'>
          <img src={logoImg} alt="Logo da Alura Books"/>
          <p><strong>Alura</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
