const ChangePasswordComponent = ({ 
    password, setPassword, repeatPassword, setRepeatPassword,
}) => {
    return (
        <>
            <h2 style={{color: '#4b4b4b', margin: '0 0 8px'}}>
                Введіть новий пароль
            </h2>
            <div>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Введіть новий пароль"
                    className="forgetPasswordPage_input_loginComponent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    name="repeatPassword" 
                    placeholder="Повторіть новий пароль"
                    className="forgetPasswordPage_input_loginComponent"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
            </div>
        </>
    );
};

export default ChangePasswordComponent;