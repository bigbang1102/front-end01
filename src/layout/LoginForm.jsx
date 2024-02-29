import axios from 'axios'
import { useState } from "react";
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const hdlChange = e => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8889/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="p-5 w-4/6 min-w-[500px] mx-auto rounded mt-5  ">
      {/* <div className="text-3xl mb-5">Please Login</div> */}
      <form className="d-flex justify-content-center align-items-center h-100" onSubmit={hdlSubmit}>
        <div className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
          <div className='p-5 w-100 d-flex flex-column'>
            <label className="form-control w-full max-w-xs">
              <div col='12'>
                <span className="label-text text-black">username</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                name="username"
                value={input.username}
                onChange={hdlChange}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-black">password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                name="password"
                value={input.password}
                onChange={hdlChange}
              />
            </label>

            <div className="flex gap-5 ">
              <button type="submit" className="btn btn-outline btn-info mt-7">Login</button>
              <Link className='btn btn-outline btn-primary mt-7' to="/register">register</Link>


            </div>
          </div>
        </div>



      </form>
    </div>
  );
}
