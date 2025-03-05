import React from 'react';
import { NavLink } from 'react-router-dom';

import './Main.scss';

import MainDescription from './MainDescription/MainDescription';
import MainSeasons from './MainSeasons/MainSeasons';
import MainAbout from './MainAbout/MainAbout';

const Main = () => {
  return (
    <div className="aot-site__main">
      <MainDescription />
      <MainSeasons />
      <MainAbout />
    </div>
  );
};

export default Main;
