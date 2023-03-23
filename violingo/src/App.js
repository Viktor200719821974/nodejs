import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import './style/style.css';
import {fetchUser, isAdminUser, isLoginUser, isStatisticUser} from './redux/actions';
import ApiRouter from './components/ApiRouter';
import { getUserById } from './http/userApi';
// import { getStatistic } from './http/statisticApi';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
 
  useEffect(() => {
    try{
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        getUserById(accessToken).then(data => {
          if (data) {
            dispatch(fetchUser(data));
            dispatch(isLoginUser(true));
            dispatch(isStatisticUser(data.statistic));
            dispatch(isAdminUser(data.is_staff));
          }         
        });
        // getStatistic().then(data => {
        //   if (data.status === 200) {
        //     dispatch(statisticUser(data.data));
        //   }
        // });
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
