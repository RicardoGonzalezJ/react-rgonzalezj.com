import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-social';
import './styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/LeftSection';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
