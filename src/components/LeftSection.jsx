import React from 'react';
import './leftsection.css';

function LeftSection() {
  return (
    <div className="container-fluid" id="left-sec">
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <img className="img-responsive" src="../public/images/marciano.jpg" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <ul className="general-info">
            <h3>General Information</h3>
            <li>
              <i className="fas fa-pencil-alt" />
              <strong>Name:</strong>
              {' '}
                Ricardo González
            </li>
            <li>
              <i className="fas fa-map-marker-alt" />
              <strong>Location:</strong>
              {' '}
                Panama PA
            </li>
            <li>
              <i className="fas fa-award" />
              <strong>Day of Birth:</strong>
              {' '}
                August 14, 1980
            </li>
            <li>
              <i className="fas fa-envelope" />
              <strong>rgonzalezj1480@gmail.com</strong>
            </li>
            <li>
              <i className="fas fa-mobile-alt" />
              <strong>+507 66719560</strong>
            </li>
            <li>
              <i className="fas fa-desktop" />
              <strong><a href="https://www.rgonzalezj.com" target="blank">www.rgonzalezj.com</a></strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
