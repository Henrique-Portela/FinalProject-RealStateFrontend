import "../StyleCss/Login.css";
import { useState } from "react";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

import toast, { Toaster } from "react-hot-toast";





import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/sign-up`, newUser)
      .then((response) => {
        if (response.status === 201) {
          setName("");
          setEmail("");
          setPassword("");
          toast.success("User created");
        }
         navigate("/login")
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="myform bg-light w-25 rounded-2 position-absolute top-50 start-50 translate-middle">
        <h1 className="text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
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
                  type={type}
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
            Create account
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
