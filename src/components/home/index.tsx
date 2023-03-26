import React from 'react';

import Banner from './banner';
import Regions from './regions';
import './style.scss';

function Home() {
  return (
    <>
      <Banner />
      <div className="Home">
        <Regions />
      </div>
    </>
  );
}
export default Home;
