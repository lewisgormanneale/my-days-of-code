import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth'
import './Login.css'

export function Login() {
  const [error, setError] = useState(null)
  const { signInWithGitHub } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    const { errorMessage } = await signInWithGitHub({
        provider: 'github'
    })
    if (errorMessage) {
      setError(errorMessage)
      console.log(errorMessage)
      return error;
    } else {
       navigate('/')
    }
  };

  return (
    <div className='login'>
      <h2>Welcome to My Days Of Code! Sign In Below:</h2>
      <button onClick={handleSubmit}>Sign In With GitHub</button>
    </div>
  )
}

export default Login;