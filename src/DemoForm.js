import React, { useState } from 'react';

export const DemoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [passError, setPassError] = useState(true);

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

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRePasswordChange = (event) => {
        const reenteredPassword = event.target.value;
        setRepassword(reenteredPassword);
        setPassError(password !== reenteredPassword);
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
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                {passError ? "Password Doesn't Match" : "Password Match"}
            </div>
        </div>
    );
};
