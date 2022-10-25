import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getFilms } from './services/films.service';

function App() {

  useEffect(() => {
    (async function() {
      try {
        const res = await getFilms()
        console.log(res)
        
      } catch (error) {

        throw error

      }
    })()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
