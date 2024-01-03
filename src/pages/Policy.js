import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Policy = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout title={"Privacy Policy"}>
     <div className="privacy-policy">
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="/images/privacy.png"
              alt="no image"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <h2>Privacy Policy</h2>
            <p className="text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis obcaecati esse tempore unde ratione, eveniet mollitia,
              perferendis eius temporibus dicta blanditiis doloremque explicabo
              quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
              accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
              commodi illum quidem neque tempora nam.
            </p>
            <button onClick={handleShow} style={{ border:'1px solid white', width:'150px',height:'40px',textAlign:'center',fontSize:'20px', backgroundColor: " greenyellow",color:'black', borderRadius: "100px"}}>Learn More</button>
          </div>
        </div>
     </div>
      <Modal className="modal-dialog" show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:'greenyellow'}}>
          <Modal.Title>PRIVACY POLICY</Modal.Title>
        </Modal.Header>
      <div className="d-flex">
          <img src="/images/privacy.png"/>
          <Modal.Body style={{marginTop:'80px'}}>Please read this Privacy Policy carefully before proceeding, as by using the Website and providing your Personal Information, you consent to the collection and use of the information you disclose on the Website <br/> in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this Privacy Policy.<br/> <br/> If you disclose any Personal Information relating to other people to us, you represent that you have the authority to do so and to permit us to use the information in accordance with this Privacy Policy.
  
  If you do not agree with the provisions of this Privacy Policy, then please do not access the Website.
  
  Note: Our Privacy Policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.</Modal.Body>
      </div>
<Modal.Header>
          <Modal.Title>SCOPE OF THE PRIVACY POLICY </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{marginLeft:'50px'}}>This Privacy Policy describes the information that FNP, as part of its normal operations, collects from you, stores, uses and protects. The purpose of this Privacy Policy is to outline and help you understand various guidelines and procedures that are consistently followed by FNP when collecting, storing, utilizing, disclosing or otherwise dealing with any Personal Information. By using the Website, you agree to be legally bound by this Privacy Policy, which shall take effect immediately on your first use of the Website.
        <br/> <br/> 
Further, the Website may contain hyperlinks to websites operated by parties other than FNP which are developed by people over whom FNP exercises no control as well as the Website may contain social media plug-ins. This Privacy Policy does not apply to the practices of such third-party websites or social media websites. Such other third-party/social media websites may place their own cookies on your computer/electronic device, collect data or solicit Personal Information. FNP is accordingly not responsible for the privacy practices or the content of such websites.</Modal.Body>
        <Modal.Header>
          <Modal.Title>INFORMATION COLLECTED BY FNP
</Modal.Title>
        </Modal.Header> 
        <Modal.Body style={{marginLeft:'50px'}}>FNP primarily collects and stores the Personal Information, as would be provided by you in the course of accessing and using the services provided by FNP through the Website. <br/> <br/>  With regard to accessing and using the services provided by the Company on the Website, FNP would generally process your name, phone number, e-mail address, age, date of birth, account information like username, password and device information like preferences, time zone, location data, etc. Our primary goal in doing so is to provide you a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet your needs, and to customize our Website to make your experience safer and easier.

</Modal.Body>
        <Modal.Header>
          <Modal.Title>USE AND DISCLOSURE OF COLLECTED INFORMATION
 </Modal.Title>
        </Modal.Header> 
        <Modal.Body style={{marginLeft:'50px'}}>When any Personal Information is provided by you to the Company in the course of your access to the Website for purchase of the products available on the Website and for taking steps at your request prior to entering into a contract and/or for performance of a contract,<br/> <br/>  the Personal Information provided by you shall be used by the Company for the purposes of facilitating your request/order for purchase of the products including managing our licenses, registrations, subscriptions, user access, capacity, billing/payments, support, purchases, etc.

</Modal.Body>
        <Modal.Header>
          <Modal.Title>GRIEVANCE OFFICER

 </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{marginLeft:'50px'}}>For any queries related to this Privacy Policy, correction of any Personal Information provided by you or for making a complaint about breach of privacy, you may please contact the following official of the Company: <br/>

<span style={{color:'yellowgreen',fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Name : Jyothi Prakash</span> <br/>

<span style={{color:'yellowgreen',fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Address: Kochi, India</span> <br/>

<span style={{color:'yellowgreen',fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Email Address: jyothiprakash@gmail.com</span> <br/>

<span style={{color:'yellowgreen',fontWeight:'bold',fontSize:'20px',marginLeft:'70px'}}>Contact number: +91 9212422000 / +91 9755248248</span></Modal.Body>
        <Modal.Footer>
          <Button style={{ border:'1px solid white', width:'100%',height:'40px',textAlign:'center',fontSize:'20px', backgroundColor: " greenyellow",color:'black', borderRadius: "100px"}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Policy;