import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container " style={{ minHeight: "95vh" }}>
        <form onSubmit={handleSubmit}>
<div className="d-flex">
  <div>
              <img width={'400px'} height={'500px'} src="https://images.pexels.com/photos/8349226/pexels-photo-8349226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
    
  </div>     
     <div style={{width:'500px',marginLeft:'50px'}}>
              <h4 style={{marginTop:'50px'}} className="title">LOGIN FORM</h4>
    
              <div className="mb-3">
                <input style={{marginTop:'50px'}}
                  type="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input style={{marginTop:'30px'}}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <div className="mb-3">
                <button style={{marginLeft:'100px',marginTop:'20px',textAlign:'center',fontSize:'1.05rem',color:'black', borderRadius: "100px"}}
                  type="button"
                  className="btn forgot-btn"
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot Password
                </button>
              </div>
    
              <button  style={{marginLeft:'100px',marginTop:'20px',textAlign:'center',fontSize:'1.05rem',  backgroundColor: " green",color:'black', borderRadius: "100px"}}  type="submit" className="btn btn-primary">
                LOGIN
              </button>
          </div>
</div>
        </form>
      </div>
      <ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </Layout>
  );
};

export default Login;
