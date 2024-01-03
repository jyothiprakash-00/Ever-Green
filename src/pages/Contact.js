import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <img style={{position:'relative',boxShadow:'0px 10px 10px green',marginTop:'90px',width:'1200px',height:'430px'}} src="./images/download.png" alt=""/>
        <div style={{marginRight:'600px',marginTop:'180px',position:'absolute',fontWeight:'105px'}} className="col-md-4">
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : jyothiprakash@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 9123456781
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
 
  );
};

export default Contact;