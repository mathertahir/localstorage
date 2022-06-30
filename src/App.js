import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Infoform from './components/Infoform';
import Listinfo from './components/Listinfo';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Infoform/>}></Route>
        <Route path="/list" element={<Listinfo/>}></Route>
      </Routes>
      </BrowserRouter>
    

      
    </div>
  );
}

export default App;
