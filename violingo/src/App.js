import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

import './style/style.css';
import { fetchUser, isLoginUser, statisticUser } from './redux/actions';
import ApiRouterPublic from './components/apiRouter/ApiRouterPublic';
import { getUserById } from './http/userApi';
// import ApiRouterAuth from './components/apiRouter/ApiRouterAuth';
// import ApiRouterStatistic from './components/apiRouter/ApiRouterStatistic';

function App() {
  const [loading, setLoading] = useState(true);
  // const [statistic, setStatistic] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(() => {
    try{
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        getUserById(accessToken).then(data => {
          if (data) {
            dispatch(fetchUser(data));
            dispatch(isLoginUser(true));
            dispatch(statisticUser(data.statistic));
          }         
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
       <ApiRouterPublic/>
      {/* {(statistic) && <ApiRouterAuth/>} */}
      {/* {(isLogin && statistic) && <ApiRouterStatistic/>} */}
    </BrowserRouter>
  );
}

export default App;
