import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div style={{ marginLeft:'100px',marginTop:'100px'}} className="row">
          <div  className="col-md-3">
            <AdminMenu />
          </div>
          <div style={{borderRadius:'10px',boxShadow:'0px 10px 10px green',width:'800px',backgroundColor:'green', color:'white',background: "linear-gradient(to right, rgb(60, 96, 7), #000000)"}} className="col-md-9">
<div className="d-flex">
              <div style={{marginTop:'30px',marginLeft:'50px'}} className="w-75 p-3">
                <h3 className="mt-3"> <i class="fa-solid fa-user"></i> : {auth?.user?.name}</h3>
                <h3 className="mt-3"> <i class="fa-solid fa-envelope"></i> : {auth?.user?.email}</h3>
                <h3  className="mt-3"><i class="fa-regular fa-address-book"></i> : {auth?.user?.address}</h3>
                <h3 className="mt-3"> <i class="fa-solid fa-phone-volume"></i> : {auth?.user?.phone}</h3>
              </div>
              <div>  <img height={"300px"} width={"330px"} src="https://images.pexels.com/photos/4153232/pexels-photo-4153232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
  </div>
  
</div>          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;