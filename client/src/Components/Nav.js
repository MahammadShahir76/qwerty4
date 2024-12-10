import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('User');
    const navigate = useNavigate();

    const logee = () => {
        localStorage.clear();
        navigate('/signup');
    };
    return (
        <nav className="NavBar">
            <div className="logo">
                <h3>Service-hub</h3>
            </div>
            <div className="login-home">
                {auth ? (
                    <>
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">About us</Link>
                        <button onClick={logee}>Logout</button>
                    </>
                ) : (
                    <>
                      <button>  <Link to="/signup">SignUp</Link></button>
                      <button> <Link to="/login">Login</Link> </button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
