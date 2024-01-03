import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div  style={{background:"linear-gradient(to right, rgb(60, 96, 7), #000000)" ,height:'300px',borderRadius:'10px'}} className="list-group dashboard-menu">
          <h4  style={{background:"linear-gradient(to right, rgb(60, 96, 7), #000000)"}} >Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;