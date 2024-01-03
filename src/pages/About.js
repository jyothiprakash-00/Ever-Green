import React from "react";
import Layout from "./../components/Layout/Layout";
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="about-us">
      <img style={{position:'relative'}} height={'600px'} width={'100%'} src="https://images.pexels.com/photos/3094211/pexels-photo-3094211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <h1 style={{position:'absolute',marginTop:'-400px',marginLeft:'400px',fontSize:'100px'}}>About Us</h1>
       <div className="d-flex m-5">
          <div style={{ boxShadow:' 0 10px 20px green, 0 4px 8px rgba(9, 9, 9, 0.06)'}} className="col-md-6 ">
            <img  height={'500px'} 
              src="https://images.pexels.com/photos/5231137/pexels-photo-5231137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div style={{marginLeft:'100px'}} className="col-md-4">
            <h2>Who we are
  </h2>
  <h4> We are Ferns N Petals: India's Biggest Gifting Solutions Provider</h4>
            <p className="text-justify mt-2">
           

For over 25 years, we are helping customers to celebrate their special moments by delivering fresh flowers and fabulous gifts. Ferns N Petals was established in 1994 and flower bouquet delivery was the first and only thing that the company was into. From just 1 flower shop in Delhi during 1994, Ferns N Petals is now the largest florist chain with more than 320 stores (and still counting) across all the major cities and towns of India.

Today, Ferns N Petals Group encompasses of FNP Retail & Franchising, FNP E-commerce- India, UAE, Singapore & Qatar, FNP Weddings & Events, Floral Touch- India & UAE, FNP Gardens, Handicrafts, The Flagship Store by FNP, WDH (Wedding Design Hub), FNP Cakes 'N' More and FNP Media. The brand is one stop shop for all gifting needs, be it buying flowers, cakes, plants, personalized gifts, decoration services, or experiences, not only in India but across the globe.


            </p>
          </div>
       </div>
       <div >
        <h1 style={{textAlign:'center'}}>Our Core Values</h1>
      <div className="d-flex justify-content-center align-items-center m-3 mb-5">
         <div >
            <Card style={{ width: '18rem'  ,backgroundColor: 'rgba(37, 198, 58, 0.097)',    boxShadow:' 0 10px 20px green, 0 4px 8px rgba(9, 9, 9, 0.06)'
 }}>
          <Card.Img variant="top" style={{borderRadius:'50%'}} height={'200px'} width={'50px'} src="https://tse1.mm.bing.net/th?id=OIP.uM-GJxPBsyvVmhxLmmbSkgHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110" />
          <Card.Body className="card-dark">
            <Card.Title>Character</Card.Title>
            <Card.Text>
            Trustworthiness, Commitment, Integrity, Ethics, Fair-play, Compliance, Transparency


            </Card.Text>
          </Card.Body>
        </Card>
         </div>

     <div  className="ms-3">
        <Card style={{ width: '18rem'  ,backgroundColor: 'rgba(37, 198, 58, 0.097)',    boxShadow:' 0 10px 20px green, 0 4px 8px rgba(9, 9, 9, 0.06)'
 }}>
        <Card.Img  style={{borderRadius:'50%'}} height={'220px'} width={'50px'} variant="top" src="https://cdn1.iconfinder.com/data/icons/round-ui/212/25-512.png" />
        <Card.Body  className="card-dark">
          <Card.Title>Compassion</Card.Title>
          <Card.Text>
          Empathy, Respect , Gratitude, Inclusiveness


          </Card.Text>
        </Card.Body>
      </Card>
     </div>

   <div  className="ms-3">
      <Card style={{ width: '18rem'  ,backgroundColor: 'rgba(37, 198, 58, 0.097)',    boxShadow:' 0 10px 20px green, 0 4px 8px rgba(9, 9, 9, 0.06)'
 }}>
        <Card.Img  style={{borderRadius:'50%'}} height={'220px'} width={'50px'} variant="top" src="http://rlv.zcache.co.uk/smiley_face_glass_ball_round_stickers-r362e332a95854944be68bd9c57ad8575_v9wth_8byvr_512.jpg" />
        <Card.Body  className="card-dark">
          <Card.Title>Customer Centric
 </Card.Title>
          <Card.Text>
          Customer, Responsiveness, Pro-Feedback, Accountability


          </Card.Text>
        </Card.Body>
      </Card>
   </div>

    <div  className="ms-3">
      <Card style={{ width: '18rem'  ,backgroundColor: 'rgba(37, 198, 58, 0.097)',    boxShadow:' 0 10px 20px green, 0 4px 8px rgba(9, 9, 9, 0.06)'
 }}>
        <Card.Img  style={{borderRadius:'50%'}} height={'200px'} width={'50px'} variant="top" src="http://clipart-library.com/img/1308999.png" />
        <Card.Body  className="card-dark">
          <Card.Title>Collective Growth
</Card.Title>
          <Card.Text>
          Profitability, Cost-consciousness, Community service, Social Responsibility


          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    <div  className="ms-3">
      <Card style={{ width: '18rem'  ,backgroundColor: 'rgba(37, 198, 58, 0.097)',    boxShadow:' 0 10px 20px green, 0 4px 8px rgba(9, 9, 9, 0.06)'
 }}>
        <Card.Img  style={{borderRadius:'50%'}} height={'200px'} width={'50px'} variant="top" src="http://www.clipartbest.com/cliparts/aTq/665/aTq665Rpc.jpg" />
        <Card.Body  className="card-dark">
          <Card.Title>Continuous Transformation
 
</Card.Title>
          <Card.Text>
          Experiment, Innovation, Introspection, Resilience, Agility, Adaptability, Diversity




          </Card.Text>
        </Card.Body>
      </Card>
    </div>
      </div>

       </div>
      </div>
    </Layout>
  );
};

export default About;