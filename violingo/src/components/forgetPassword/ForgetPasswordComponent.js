const ForgetPasswordComponent = ({ email, setEmail, }) => {
    return (
        <div>
            <h2 style={{color: '#4b4b4b', margin: '0 0 8px'}}>
                Не пам'ятаю пароль
            </h2>
            <h5 style={{color:'#3c3c3c'}}>
                Ми надішлемо вам інструкцію для скидання пароля електронною поштою.
            </h5>
            <div>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Електронна пошта"
                    className="forgetPasswordPage_input_loginComponent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </div>
        
    );
};

export default ForgetPasswordComponent;