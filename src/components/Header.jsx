import React from 'react';
import './header.css';

function Header() {
  return (
    <div id="header">
      <div className="row">
        <div className="col-md-4 tag-name">
          <h1>rgonzalezj.com</h1>
        </div>
        <div className="col-md-4 offset-md-4 clearfix" id="btn-div">
          <button className="btn float-rsm" type="button">
            Download CV
            <i className="fas fa-download" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
