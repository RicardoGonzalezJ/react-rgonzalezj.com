import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap-social';
import './styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Sidebar from './components/LeftSection';
import MainContent from './components/MainContent';
import ResumeData from './resumeData.json';

function App() {
  console.log(ResumeData);
  return (
    <div className="container-fluid">
      <Navbar />
      <Header />
      <Sidebar />
      <MainContent
        title={ResumeData.about.title}
        name={ResumeData.about.name}
        description={ResumeData.about.description}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
