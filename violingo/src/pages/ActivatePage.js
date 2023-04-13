import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { activateAccount } from '../http/userApi';

const ActivatePage = () => {
    const [register, setRegister] = useState(false);
    let params = useParams();
    let token = params.token;

    useEffect(() => {
            try {
                activateAccount(token).then(data => {
                    if (data === 'User activated'){                        
                        setRegister(false);    
                    }
            }).catch(err => {
                if (err.response.data === 'Token was already used') {
                   setRegister(true);                       
                }
            }); 
            } catch (e) {
                console.log(e.message);
                }
    // eslint-disable-next-line            
    },[register]);
    return (
        <div className={'activatePage_div_register display_alien_justify'}>
            {!register ? 
                <div className={'activatePage_div_register_welcome'}>
                    Вітаємо, Ви підтвердили свою електронну адресу !!!!
                </div>
                : 
                <div className={'activatePage_div_register_error'}>
                    Ваша адреса підтверджена!!!!
                </div> 
            }
        </div>
    );
};

export default ActivatePage;
