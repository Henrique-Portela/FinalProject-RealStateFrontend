import React from 'react'
import bootstrap from 'bootstrap'

const Login = () => {
  return (
    <>
      <div className="myform bg-dark w-25 rounded-2 position-absolute top-50 start-50 translate-middle">
        <h1 className="text-center">Login Form</h1>
        <form>
          <div className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-light mt-3">
            LOGIN
          </button>
          <p>
            Not a member? <a href="#">Signup now</a>
          </p>
        </form>
      </div>
    </>
  )
}

export default Login
