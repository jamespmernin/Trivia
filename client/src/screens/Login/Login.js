import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData);
    }}>
      <h1>Login</h1>
      <label>Username:
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>Password:
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* <Link to='/home'><button>Submit</button></Link> */}
      <button>Submit</button>
      <Link to='/signup'><button>Sign Up</button></Link>
    </form>
  )
}