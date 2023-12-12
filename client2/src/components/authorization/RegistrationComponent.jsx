import React from 'react';

const RegistrationComponent = ({ setFirstName, setLastName, }) => {
    return (
        <div>
            <div className="div_input">
                <input 
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input_class"
                />
            </div>
            <div className="div_input">
                <input 
                    type="text"
                    name="lastName"
                    placeholder="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    className="input_class"
                />
            </div>
        </div>
    );
};

export default RegistrationComponent;