import React from 'react';

import Banner from './banner';
import Regions from './regions';
import './style.scss';
import Teams from './teams';

function Home() {
  return (
    <>
      <Banner />
      <div className="Home">
        <Regions />
        <Teams />
      </div>
    </>
  );
}
export default Home;
