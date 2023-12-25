import React,  {Component} from 'react';
import Logo from "./images/LogoMakr-3GMuef.png";
import './Nav.css';

export default class NavBar  extends Component{
  render(){
    return(
  //   <nav class="navbar navbar-expand-lg navbar-light bg-light "  >
  //     {<img src={Logo} width="50" height="50"  />}<a class="navbar-brand" href="#">Green Lanka</a>
  //       <div class="container-fluid">

  //       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  //   <span class="navbar-toggler-icon"></span>
  // </button>
  //   <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  //   <ul class="navbar-nav">
  //   <li class="nav-item ">
  //   <a class="nav-link "  aria-current="page" href="/">Customer</a>
  //   </li>
  //   <li class="nav-item ">
  //   <a class="nav-link "  aria-current="page" href="/addnew">Admin</a>
  //   </li>
  //   <li class="nav-item ">
  //   <a class="nav-link "  aria-current="page" href="/viewdeliver">Delivery</a>
  //   </li>
  //   <li class="nav-item">
  //         <a class="nav-link" href="#">Instructor</a>
  //       </li>
  //       <li class="nav-item">
  //         <a class="nav-link" href="/about">About Us</a>
  //       </li>
  //   </ul>
    
  //   </div>

  //       </div>
  //   </nav>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {<img src={Logo} width="50" height="50"  />}<a class="navbar-brand" href="#">Green Lanka</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    
    <ul class="navbar-nav">
    <li class="nav-item ">
      <a class="nav-link " aria-current="page" href="/">Home <span class="sr-only">(current)</span></a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="/admin">Admin</a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="/viewdeliver">Delivery</a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="/instructor">Instructor</a></li>
      <li class="nav-item ">
      <a class="nav-link "  aria-current="page" href="/about">About Us</a></li>
    </ul>
    </div>
 
</nav>
)
   
  }
}