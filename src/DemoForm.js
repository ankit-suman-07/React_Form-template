import React, { useState } from 'react';
import "./DemoForm.css";

export const DemoForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [passError, setPassError] = useState(true);
    const [validationError, setValidationError] = useState("");

    const sentenceCase = str => {
        if (str === null || str === "") return "";
        else str = str.toString();
      
        return str.replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };

    const handleNameChange = (event) => {
        setName(sentenceCase(event.target.value));
    };

    const handleAgeChange = (event) => {
        const tempAge = event.target.value;
        if(tempAge >= 0 && tempAge <= 100)
            setAge(tempAge);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (!handlePasswordValidation(event.target.value)) {
            setValidationError("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 9 characters long.");
        } else {
            setValidationError("");
        }
    };
    

    const handleRePasswordChange = (event) => {
        const reenteredPassword = event.target.value;
        setRepassword(reenteredPassword);
        setPassError(password !== reenteredPassword);
    };

    const handlePasswordValidation = str => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
        return regex.test(str);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can use the state variables (name, email, password) here as needed
    };

    return (
        <div className='react-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-name'>
                    <label>Name: </label>
                    <input type='text' value={name} onChange={handleNameChange} />
                </div>

                <div className='form-age'>
                    <label>Age: </label>
                    <input type='number' value={age} onChange={handleAgeChange} />
                </div>

                <div className='form-email'>
                    <label>Email: </label>
                    <input type='text' value={email} onChange={handleEmailChange} />
                </div>

                <div className='form-pass'>
                    <label>Password: </label>
                    <input type='password' value={password} onChange={handlePasswordChange} />
                </div>

                <div className='form-pass'>
                    <label>Re-type Password: </label>
                    <input type='password' value={repassword} onChange={handleRePasswordChange} />
                </div>

                <button type="submit">Submit</button>
            </form>

            <div className='user-details'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                {passError ? "Password Doesn't Match" : "Password Match"}
                <p>Valid Erro : {validationError}</p>
            </div>
        </div>
    );
};
