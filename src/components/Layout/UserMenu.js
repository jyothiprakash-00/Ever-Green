import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div style={{background:"linear-gradient(to right, rgb(60, 96, 7), #000000)" ,height:'300px',borderRadius:'10px'}} className="text-center dashboard-menu">
        <div className="list-group">
          <h4 style={{background:"linear-gradient(to right, rgb(60, 96, 7), #000000)"}}>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
