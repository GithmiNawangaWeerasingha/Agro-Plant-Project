import React,  {Component} from 'react';
import axios from 'axios';
import Logo from "./images/Logo.jpg";
import section from "./about.css";
import{Link} from "react-router-dom";
import VMC from './inc/Vmc';
import firstperson from "./images/Virajika.jpeg";
import secondperson from "./images/Gagani.jpeg";
import thirdperson from "./images/gimmi.jpeg";
import fourthperson from "./images/kalpo.jpeg";

function Home(){
    return(
        
        <div className="container-fluid" style={{backgroundColor:'#FFFFFF'}}>
          <section className="section">
            <div className="container">
              <div className='row'>
                <div className='col-md-12 text-center'>
                  <h3 className='main-heading'>Our Company</h3>
                  <div className='underline mx-auto'></div>
                  <p className='about'>
                  “Green Lanka” Organic Plantation is a well established company since 1992, located at 444/2nd mailpost,Gregory park road, Nuwaraeliya, Sri Lanka. 
                  It has the only green leaves farm certified as 100% organic, of which the certification body is Control Union Certifications Netherlands.
                  It is also the 1st in Sri Lanka to be awarded GMP (Good Manufacturing Practices) from SLSI.</p>
                  <Link to="/about" className='btn btn-info shadow'>Read More</Link>                               
                </div>
              </div>
            </div>
          </section>
    {/* VMC */}
    <VMC/>


    {/* Our Service */}
    <section className="section1 border-top">
<div className="container">
  <div className='row'>
    <div className='col-md-12 mb-4 text-center'>
      <h3 className='main-heading'>Our Team</h3>
      <div className='underline mx-auto'></div>                           
    </div>
    <div className='col-md-3 '>
      <div className='card shadow'>
      <img src={firstperson} className="w-100 boarder-bottom" alt="Services"/>
          <div className='card-body text-left'>
            <h6>G.A.V. Nirmali</h6>
            <div className='underline'></div>
            <p>
            Registration No- IIT/19/009<br/>virajinirmali@gmail.com <br/>Industrial Information Technology
            </p>
            </div>
      </div>
  </div>
  <div className='col-md-3'>
      <div className='card shadow'>
      <img src={secondperson} className="w-100 boarder-bottom" alt="Services"/>
          <div className='card-body text-left'>
            <h6>G.H. Karunathilaka</h6>
            <div className='underline'></div>
            <p>
            Registration No- IIT/19/011 <br/>gagani@gmail.com <br/>Industrial Information Technology
            </p>
          </div>
      </div>
  </div>
  <div className='col-md-3'>
      <div className='card shadow'>
      <img src={thirdperson} className="w-100 boarder-bottom" alt="Services"/>
          <div className='card-body text-left '>
            <h6>G.N. Weerasingha</h6>
            <div className='underline'></div>
            <p>
            Registration No- IIT/19/067 <br/>githmi@gmail.com <br/>Industrial Information Technology
            </p>
          </div>
      </div>
  </div>
  <div className='col-md-3'>
      <div className='card shadow'>
      <img src={fourthperson} className="w-100 boarder-bottom" alt="Services"/>
          <div className='card-body text-left'>
            <h6>J.D.B.K. Jayakody</h6>
            <div className='underline'></div>
            <p>
            Registration No- IIT/19/068 <br/>kalpani@gmail.com <br/>Industrial Information Technology
            </p>
          </div>
      </div>
  </div>
</div>
</div>
    </section>


    <footer class="footer-distributed">

        <div class="footer-left">

        {<img src={Logo} width="50" height="50"  />}<h3>Green<span>Lanka</span></h3>

        <p class="footer-links">
                <a href="Home" class="link-1">Home</a>
                
                <a href="#">Admin</a>
            
                <a href="#">Delivery</a>
            
                <a href="#">Instructor</a>
                               
                <a href="#">About Us</a>
            </p>

            <p class="footer-company-name">Green Lanka © 2022</p>
        </div>

        <div class="footer-center">

          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>444/2nd mailpost,</span> Gregory park road, Nuwaraeliya</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+94522235018</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">GreenLanka@company.com</a></p>
          </div>

        </div>

        <div class="footer-right">
        <p class="footer-company-about">
        <span>About the company</span>
        Growing organic produce takes skill, care and a lot of patience , we aim to ensure all the produce that gets sold through Organic Amrit, gets the due respect, care and love, all the way till it reaches our consumers
      </p>

          <div class="footer-icons">
      
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-whatsapp"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>

          </div>

        </div>

      </footer>


        {/* <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Employee</a></button> */}
     

   </div>   
       

    );
  }
export default Home;