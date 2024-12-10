import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("User");
        if (auth) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
        result = await result.json();
        if (result.name) {
            localStorage.setItem("User", JSON.stringify(result));
            navigate("/");
        } else {
            alert("Enter correct details");
        }
    };

    return (
        <div className="main-login">
            <div className="Login">
                <h1>Login Page</h1>
                <input
                    type="text"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type="button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;
