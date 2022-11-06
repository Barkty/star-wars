import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppState from 'store/AppState';

const Home = lazy(()=> import('pages/home/Home'))

function App() {

  return (
    <div className="App">
      <AppState>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </AppState>
    </div>
  );
}

export default App;
