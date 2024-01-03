import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div className="form-container " style={{ minHeight: "95vh" }}>
        <form onSubmit={handleSubmit}>
       <div className="d-flex">
          <div >
              <img width={'400px'} height={'500px'} src="https://images.pexels.com/photos/7034717/pexels-photo-7034717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
    
          </div>      
          <div style={{width:'500px',marginLeft:'50px'}}>
            <h4  style={{marginTop:'50px'}} className="title">RESET PASSWORD</h4>
    
              <div className="mb-3">
                <input style={{marginTop:'40px'}}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input style={{marginTop:'20px'}}
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Hobby "
                  required
                />
              </div>
              <div className="mb-3">
                <input style={{marginTop:'20px'}}
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your New Password"
                  required
                />
              </div>
    
              <button style={{marginLeft:'100px',marginTop:'50px',marginLeft:'100px',marginTop:'20px',textAlign:'center',fontSize:'1.05rem',  backgroundColor: " green",color:'black', borderRadius: "100px"}} type="submit" className="btn btn-primary">
                RESET
              </button>
              </div>
       
       </div>
        </form>
      </div>      <ToastContainer position='top-center' autoClose={2000} theme='colored' />

    </Layout>
  );
};

export default ForgotPasssword;