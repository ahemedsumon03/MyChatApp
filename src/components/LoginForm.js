import React, {useState} from 'react';
import axios from "axios";
const projectId = '8058ad17-930d-4827-b782-6443afc3e83a';

const LoginForm = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const authObject = {'Project-ID':projectId,'User-Name':username,'User-Secret':password};

        try{
            await axios.get('https://api.chatengine.io/chats',{ headers: authObject });
            localStorage.setItem('Username',username);
            localStorage.setItem('Password',password);
            window.location.reload();
            setError('');
        }catch (e) {
            setError('OPps! wrong Information');
        }
    };

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} className='input' placeholder='Enter Username' required/>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Enter Password' required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h1>{error}</h1>
            </div>
        </div>
    );
};

export default LoginForm;