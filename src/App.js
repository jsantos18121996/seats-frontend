import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SeatsHome from './components/SeatsHome';
import SeatsOptions from './components/SeatsOptions';
import SeatsOption1 from './components/SeatsOption1';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact
            path='/'
            element={< SeatsHome />}>

          </Route>
          <Route exact path='/options' element={< SeatsOptions />}></Route>
          <Route
            exact path='/options/1'
            element={<SeatsOption1 />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
