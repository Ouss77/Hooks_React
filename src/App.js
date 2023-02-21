
import React, { useState } from 'react';
import { MovieCard } from './MovieCard';
import { Link, Outlet, Route, Routes, BrowserRouter } from 'react-router-dom';
import Desc from './Desc';
import Home from './Home';
function App() {
  return (
    <div>
   
      <BrowserRouter>
        <Routes>
          <Route path="/desc/:id" element={<Desc />} > 
          <Route path='name' element={<>Hi this nested component</>}/>
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
