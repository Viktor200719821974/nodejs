import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import MainPage from './pages/MainPage';
import ApiRouter from './components/ApiRouter';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="main_header">
        <Header/>
      </div>
      <div className='main_body'>
        <MainPage/>
        <span className='main_apiRouter'>
          <ApiRouter/>
        </span>
      </div> 
      
    </BrowserRouter>
  );
}

export default App;
