import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { activateAccount } from '../http/userApi';

const Register = () => {
    const [register, setRegister] = useState(false);
    let params = useParams();
    let token = params.token;
    const activateUser = async() => {
        await activateAccount(token)
                
    }
    useEffect(() => {
            try {
               activateUser().then(data => {
                if (data === 'User activated'){
                    setRegister(false);
                }
            }).catch(err => {
                    if (err.response.status === 404) {
                        setRegister(true);
                    }
                }); 
            } catch (e) {
                console.log(e.message);
                }
    // eslint-disable-next-line            
    },[]);
    return (
        <div className={'div_register'}>{!register ? <div className={'div_register_welcome'}>Вітаємо, Ви підтвердили свою електронну адресу !!!!</div>
            : <div className={'div_register_error'}>Ваша адреса вже підтверджена!!!!</div> }
        </div>
    );
};

export default Register;
