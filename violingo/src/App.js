import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';

import './style/style.css';
import { fetchUser, isLoginUser } from './redux/actions';
import ApiRouter from './components/ApiRouter';
import { getUserById } from './http/userApi';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    try{
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        getUserById(accessToken).then(data => {
          dispatch(fetchUser(data));
          dispatch(isLoginUser(true));
          console.log(data);
        });
      }
    } catch(err) {
      console.log(err);
    }
    setLoading(false);
    // eslint-disable-next-line
  }, []);
  if (loading){
    return <Spinner animation={"grow"}/>
  }
  return (
    <BrowserRouter>
      <ApiRouter/>
    </BrowserRouter>
  );
}

export default App;
