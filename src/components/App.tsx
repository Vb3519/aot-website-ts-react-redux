import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Main from './Main/Main';
import About from './Main/About/About';
import Seasons from './Main/Seasons/Seasons';
import Characters from './Main/Characters/Characters';
import FanStore from './Main/FanStore/FanStore';
import Basket from './Main/Basket/Basket';

const App = () => {
  const myGreeting: string = 'Hey m8! ^_^';

  console.log('greeting:', myGreeting);

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
