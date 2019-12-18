import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <h1>This is React App.js</h1>
      <Navbar />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
