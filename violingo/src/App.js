import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import ApiRouter from './components/ApiRouter';

function App() {
  return (
    <BrowserRouter>
      <ApiRouter/>
    </BrowserRouter>
  );
}

export default App;
