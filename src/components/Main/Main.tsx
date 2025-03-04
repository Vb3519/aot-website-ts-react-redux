import React from 'react';
import { NavLink } from 'react-router-dom';

import './Main.scss';
import './DescriptionMain.scss';

import DescriptionMain from './DescriptionMain';
import SeasonsMain from './SeasonsMain';
import AboutMain from './AboutMain';

const Main = () => {
  return (
    <div className="aot-site__main">
      <DescriptionMain />
      <SeasonsMain />
      <AboutMain />
    </div>
  );
};

export default Main;
