import sova from '../../icons/forget-password-sova.svg';
const SendForgetPasswordComponent = () => {
    return (
        <div>
            <img 
                src={sova} 
                alt="stamp send email from sova "
                className="forgetPage_image_sendForgetPasswordComponent"
            />
            <h1 style={{color: '#4b4b4b', margin: '0 0 8px'}}>Дякуємо!</h1>
            <h5 style={{color: '#3c3c3c', marginBottom: '150px'}}>
                Перевірте електронну пошту.
            </h5>
        </div>
    );
};

export default SendForgetPasswordComponent;