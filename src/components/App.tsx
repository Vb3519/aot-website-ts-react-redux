import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Main from './Main/Main';
import About from './Other/About/About';
import Seasons from './Other/Seasons/Seasons';
import Characters from './Other/Characters/Characters';
import FanStore from './Other/FanStore/FanStore';
import Basket from './Other/Basket/Basket';
import SeasonDetails from './Main/MainSeasons/SeasonDetails';

const App = () => {
  return (
    <HashRouter>
      <div className="aot-website">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<Main />} />
            <Route path="about" element={<About />} />

            <Route path="seasons" element={<Seasons />} />
            <Route path="seasons/:seasonSlug" element={<SeasonDetails />} />

            <Route path="characters" element={<Characters />} />
            <Route path="fan-store" element={<FanStore />} />
            <Route path="store-basket" element={<Basket />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
