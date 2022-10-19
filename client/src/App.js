import {BrowserRouter} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import NavBar from './components/NavBar';
import ApiRouter from './components/ApiRouter';
import { getUserById } from './http/userApi';
import { isLoginUser, fetchUser } from './redux/actions';

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
        });
      }
    } catch(err) {
      console.log(err);
    }
    setLoading(false);
  }, []);
  if (loading){
    return <Spinner animation={"grow"}/>
  }
  return (
    <BrowserRouter>
        <NavBar/>
      <ApiRouter/>
    </BrowserRouter>
  );
}

export default App;
