import './App.css';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(()=> import('pages/home/Home'))

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
