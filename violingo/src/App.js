import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ApiRouter from './components/ApiRouter';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ApiRouter/>
    </BrowserRouter>
  );
}

export default App;
