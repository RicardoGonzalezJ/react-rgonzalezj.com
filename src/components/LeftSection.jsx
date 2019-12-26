import React from 'react';
import './leftsection.css';

function LeftSection() {
  return (
    <div className="container-fluid" id="left-sec">
      <div className="row no-gutters justify-content-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
          <img className="img-fluid" src="../public/images/marciano.jpg" alt="" />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
          <ul className="general-info">
            <h3>General Information</h3>
            <li>
              <i className="fas fa-pencil-alt" />
              <strong className="disappear">Name:</strong>
              {' '}
                Ricardo González
            </li>
            <li>
              <i className="fas fa-map-marker-alt" />
              <strong className="disappear">Location:</strong>
              {' '}
                Panama PA
            </li>
            <li>
              <i className="fas fa-award" />
              <strong className="disappear">Day of Birth:</strong>
              {' '}
                August 14, 1980
            </li>
            <li>
              <i className="fas fa-envelope" />
              <strong className="str-font">rgonzalezj1480@gmail.com</strong>
            </li>
            <li>
              <i className="fas fa-mobile-alt" />
              <strong>+507 67019560</strong>
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
