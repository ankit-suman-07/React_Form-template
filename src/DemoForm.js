import React, { useState } from 'react';

export const DemoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
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

                <button type="submit">Submit</button>
            </form>

            <div className='user-details'>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </div>
    );
};
