/* eslint-disable react/prop-types */
import React from 'react';
import './maincontent.css';

const MainComponent = (props) => {
  const { title, name, description } = props;
  return (
    <div className="row no-gutters">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8" id="main-content">
        <h1>{ title }</h1>
        <h2>{ name }</h2>
        <h3>{ description }</h3>
      </div>
    </div>

  );
};

export default MainComponent;
