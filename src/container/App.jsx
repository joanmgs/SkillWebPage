//Libraries
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
//Components
import Home from '../components/Home.jsx';
import SkillDetail from '../components/SkillDetail.jsx';
// import UserCard from '../components/UserCard.jsx';
// import Header from '../components/Header.jsx';
//Styles
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/skilldetail' element={<SkillDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
