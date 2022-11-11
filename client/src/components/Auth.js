import React, { useState } from 'react';
import { Alert, Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useDispatch } from 'react-redux';

import { LOGIN_ROUTE, REGISTRATION_ROUTE, HOME_ROUTE } from '../constants';
import { login, registration} from '../http/authApi';
import { fetchUser, isLoginUser } from '../redux/actions';

const Auth = observer(() => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
                    .catch(err => {
                        console.log(err);
                        if (err.response) {
                            setError(err.response.data);
                        }
                    });
            } else {
               const res = await registration(email, password, firstName, lastName, age, phone)
                   .catch(err => {
                        if (err.response) {
                            setError(err.response.data);
                        }
                   });
               if (res){
                   navigate(HOME_ROUTE);
               }
            }
            if (data) {
                dispatch(fetchUser(data.user));
                dispatch(isLoginUser(true));
                navigate(HOME_ROUTE);
                setError('');
            }
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <>
            {error && <Alert variant={'danger'} style={{textAlign: 'center', fontSize: '20px'}}>{error}</Alert>}
        <Container
            className={"d-flex justify-content-center align-items-center"}
                   style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className={"m-auto"}>{isLogin ? 'Авторизація' : "Реєстрація"}</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введіть ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder="Введіть ваше гасло..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {!isLogin &&
                        <Form.Control
                            className={"mt-3"}
                            placeholder="Введіть ваше ім'я..."
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    }
                    {!isLogin &&
                        <Form.Control
                            className={"mt-3"}
                            placeholder="Введіть ваше прізвище..."
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    }
                    {!isLogin &&
                        <Form.Control
                            className={"mt-3"}
                            placeholder="Введіть ваш вік..."
                            value={age}
                            onChange={e => setAge(e.target.value)}
                        />
                    }
                    {!isLogin &&
                        <Form.Control
                            className={"mt-3"}
                            placeholder="Введіть ваш телефон..."
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    }
                    <Row className={"d-flex justify-content-between mt-3 pl-3 pr-3"}>
                        {isLogin ?
                            <div>
                                Немає акаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструйся!</NavLink>
                            </div>
                            :
                            <div>
                                Є акаунт? <NavLink to={LOGIN_ROUTE}>Увійти!</NavLink>
                            </div>
                        }
                        <Button
                            style={{marginTop: 10}}
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Увійти' : 'Реєстрація'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
        </>
    );
});

export default Auth;