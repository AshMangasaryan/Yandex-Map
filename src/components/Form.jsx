import React, {useState} from 'react'
import './From.css'
 
const ADMIN_LOGIN = 'Admin';
const ADMIN_PASSWORD = '123';

const Form = ({setIsAdmin}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
if(login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
    setIsAdmin(true)
    setIsError(false)
} else {
    setIsError(true)
}
    };

  return (
    <form onSubmit={onSubmit}>
        <input className='logInp' type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder='Login'/>
        <input className='pw_inp' type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        {
            isError && <p className='logError'>Invalid login or password</p>
        }
        <button className='logBtn' type='submit'>Log in</button>
    </form>
  )
}

export default Form