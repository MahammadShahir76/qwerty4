import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [Category, setCategory] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('User')
        if (auth) {
            navigate("/")
        }
    }, [navigate])

    const collection = async () => {
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password, Category }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("User", JSON.stringify(result));
        if (result) {
            navigate("/")
        }
    }

    return (
        <div className='main-signup'>
            <div className='Sign-up'>
                <div className="sign-h1">
                <h1>Signup page</h1>
                </div>
                <input type='text' placeholder='Enter name' onChange={(e) => setname(e.target.value)} value={name} />
                <input type='text' placeholder='Enter email' onChange={(e) => setemail(e.target.value)} value={email} />
                <input type='password' placeholder='Enter password' onChange={(e) => setpassword(e.target.value)} value={password} />
                
                {/* Dropdown for college name */}
                <select onChange={(e) => setCategory(e.target.value)} value={Category}>
                    <option value="">Select</option>
                    <option value="Plumber">Plumbers</option>
                    <option value="Electricians">Electricians</option>
                    <option value="Mechanics">Mechanics</option>
                    <option value="Service Seeker">Service Seeker</option>
                </select>

                <button type='button' onClick={collection}>Submit</button>
            </div>
        </div>
    )
}

export default Signup
