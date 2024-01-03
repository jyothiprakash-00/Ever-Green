import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title"></h1> <img height={'600px'} width={'100%'} style={{marginTop:'-30px',position:'relative'}}  src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="no img"/>
        <Link  style={{position:"absolute",borderRadius:'10px',marginTop:'150px',boxShadow:'0px 10px 10px rgb(60, 96, 7)',width:'200px', color:'white',background: "linear-gradient(to right, rgb(60, 96, 7), #000000)"}}  to="/" className="pnf-btn text-center">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;