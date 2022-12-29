const ForgetPasswordComponent = ({ email, setEmail, }) => {
    return (
        <>
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
                    className="forgetPage_input_loginComponent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        </>
        
    );
};

export default ForgetPasswordComponent;