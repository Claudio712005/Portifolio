import React, { useState } from 'react';
import './App.sass';
import HomePage from './components/homePage';
import SobrePage from './components/sobre';
import Navbar from './components/navBar';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar onChangePage={handlePageChange} />
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'sobre' && <SobrePage />}
      </header>
    </div>
  );
}

export default App;
