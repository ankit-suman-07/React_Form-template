import React, { useState } from 'react';
import "./DemoForm.css";

export const DemoForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [passError, setPassError] = useState(true);
    const [validUpper, setValidUpper] = useState(true);
    const [validLower, setValidLower] = useState(true);
    const [validDigit, setValidDigit] = useState(true);
    const [validSpecial, setValidSpecial] = useState(true);
    const [validLength, setValidLength] = useState(true);
    const [languages, setLanguages] = useState([]);

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
        handlePasswordValidation(event.target.value);
    };
    

    const handleRePasswordChange = (event) => {
        const reenteredPassword = event.target.value;
        setRepassword(reenteredPassword);
        setPassError(password !== reenteredPassword);
    };

    const handlePasswordValidation = str => {
        setValidUpper(/[A-Z]/.test(str));
        setValidLower(/[a-z]/.test(str));
        setValidDigit(/\d/.test(str));
        setValidSpecial(/[!@#$%^&*()_+{}\[\]:;<>,.?~]/.test(str));
        setValidLength(str.length >= 9);
        // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
        // return regex.test(str);
    };

    // const handleLanguageChange = (event) => {
    //     const selectedOptions = Array.from(event.target.selectedOptions || [], option => option.value);
    //     setLanguages(selectedOptions);
    // };

    const handleLanguageChange = (event) => {
        const optionValue = event.target.value;
        if (event.target.checked) {
            setLanguages([...languages, optionValue]);
        } else {
            setLanguages(languages.filter(option => option !== optionValue));
        }
    };
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can use the state variables (name, email, password) here as needed
    };

    return (
        <div className='react-form'>
            <form onSubmit={handleSubmit} className='form-inner' >
                <div className='form-name'>
                    <label>Name: </label>
                    <input  type='text' value={name} onChange={handleNameChange} required />
                </div>

                <div className='form-age'>
                    <label>Age: </label>
                    <input type='number' value={age} onChange={handleAgeChange} required />
                </div>

                <div className='form-email'>
                    <label>Email: </label>
                    <input type='text' value={email} onChange={handleEmailChange} required />
                </div>

                <div className='form-pass'>
                    <label>Password: </label>
                    <input type='password' value={password} onChange={handlePasswordChange} required />
                </div>

                <div className='form-pass'>
                    <label>Re-type Password: </label>
                    <input type='password' value={repassword} onChange={handleRePasswordChange} required />
                </div>

                <div className='lang-checkbox' >
                    <label>Select Programming Languages:</label>
                    <div className="language-checkboxes">
                        <label>
                            <input 
                                type="checkbox" 
                                value="java" 
                                checked={languages.includes("java")} 
                                onChange={handleLanguageChange} 
                            />
                                Java
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="python" 
                                checked={languages.includes("python")} 
                                onChange={handleLanguageChange} 
                            />
                                Python
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="javascript" 
                                checked={languages.includes("javascript")} 
                                onChange={handleLanguageChange} 
                            />
                                JavaScript
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="C++" 
                                checked={languages.includes("C++")} 
                                onChange={handleLanguageChange} 
                            />
                                C++
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                value="PHP" 
                                checked={languages.includes("PHP")} 
                                onChange={handleLanguageChange} 
                            />
                                PHP
                        </label>

                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>

            <div className='user-details'>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                {passError ? "Password Doesn't Match" : "Password Match"}
                
                {validUpper ? null : <p>Must contain atleast 1 uppercase letter</p>}
                {validLower ? null : <p>Must contain atleast 1 lowercase letter</p>}
                {validDigit ? null : <p>Must contain atleast 1 digit</p>}
                {validSpecial ? null : <p>Must contain atleast 1 special character</p>}
                {validLength ? null : <p>Must contain atleast 9 characters</p>}
                <p>
                    {languages}
                </p> 
            </div>
        </div>
    );
};
