import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/AuthStyles.css";
import axios from "axios";
const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPassword(password);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div  className="container-fluid m-3 p-3 dashboard">
        <div style={{ marginLeft:'100px',marginTop:'50px',}} className="row">
          <div style={{marginTop:'50px',boxShadow:'0px 10px 10px green'}} className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-8">
            <div className="form-container" style={{ marginTop: "-40px" ,boxShadow:'0px 10px 10px green'}}>
              <form onSubmit={handleSubmit}>
               <div className="d-flex">
                 <div>
                    <h4 className="title">USER PROFILE</h4>
                    <div className="mb-3">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Name"
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Email "
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Your Password"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Phone"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter Your Address"
                      />
                    </div>
    
                    <button  style={{marginLeft:'50px',marginTop:'20px',textAlign:'center',fontSize:'1.05rem',  backgroundColor: " green",color:'black', borderRadius: "100px"}}  type="submit" className="btn btn-primary">
                      UPDATE
                    </button>
                 </div>
                 <div style={{marginLeft:'50px'}}><img height={"400px"} width={"300px"} src="https://images.pexels.com/photos/4503814/pexels-photo-4503814.jpeg" alt=""/></div>
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </Layout>
  );
};

export default Profile;