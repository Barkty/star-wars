import './App.css';
import { lazy, useEffect } from 'react';
import { getFilms } from './services/films.service';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=> import('pages/home/Home'))

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
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
