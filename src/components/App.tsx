import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Main from './Main/Main';
import About from './Other/About/About';
import Seasons from './Other/Seasons/Seasons';
import Characters from './Other/Characters/Characters';
import FanStore from './Other/FanStore/FanStore';
import Basket from './Other/Basket/Basket';

const App = () => {
  return (
    <BrowserRouter>
      <div className="aot-website">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Main />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="seasons" element={<Seasons />}></Route>
            <Route path="characters" element={<Characters />}></Route>
            <Route path="fan-store" element={<FanStore />}></Route>
            <Route path="store-basket" element={<Basket />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
