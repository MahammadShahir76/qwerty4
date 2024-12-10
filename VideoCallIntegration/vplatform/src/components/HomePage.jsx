import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
    const [input, setinput] = useState("");
    const navigate =useNavigate();

    const submitHandler = ()=>{
        navigate(`/room/${input}`);
    }
  return (
    <div>
     <input value={input} onChange={(e)=>{setinput(e.target.value)}} type="text" placeholder='Enter your name...' />
     <button onClick={submitHandler}>Join</button>

    </div>
  )
}

export default HomePage
