import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import IndexPage from './pages/IndexPage';
import DayPage from './pages/DayPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<IndexPage/>}/>
        <Route path='/day/:day' element={<DayPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
