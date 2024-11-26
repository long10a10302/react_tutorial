import React, { useState } from 'react'

const LoginForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const correctName = "long";
    const correctEmail = "long10a11999@gmail.com";
    const correctPassword = "123";

    const handleLogin = (e) => {
        e.preventDefault();
        if (name === correctName && email === correctEmail && password === correctPassword) {
            setIsLoggedIn(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid name,email or password");
            setIsLoggedIn(false);
        }
    };

    return (
        <div>
            <h2>Login form</h2>
            {isLoggedIn ? (
                <h3>Welcome, {name} </h3>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type='text'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                    <button type='submit'>Login</button>
                    {errorMessage && <div>{errorMessage}</div>}
                </form>
            )}
        </div>
    );
};
export default LoginForm;