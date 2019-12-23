import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-social';
import './styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <h1>This is React App.js</h1>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
