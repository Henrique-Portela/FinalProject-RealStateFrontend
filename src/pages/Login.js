import { useState, useContext } from 'react'
import '../StyleCss/Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { Toaster } from 'react-hot-toast'
import AuthContext from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(eyeOff)

  const { setToken } = useContext(AuthContext)

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye)
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      email,
      password,
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, newUser)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        setToken(response.data.token)
        setEmail('')
        setPassword('')
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="myform bg-light w-25 rounded-2 position-absolute top-50 start-50 translate-middle">
        <h1 className="text-center">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="wrapper">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <div className="icon">
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="iconEyes" onClick={handleToggle}>
                  <Icon icon={icon} size={25} />
                </span>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-dark mt-3">
            LOGIN
          </button>
          <p>
            Not a member? <Link to="/signup">Signup now</Link>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login
