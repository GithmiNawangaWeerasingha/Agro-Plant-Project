import React, { Component } from 'react';
import axios from 'axios';
import Logo from "./images/Logo.jpg";

export default class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {

      name: "",
      address: "",
      nic: "",
      production: "",
      quantity: "",
      price: "",
      date: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    // if(value){
    //     alert("Please Enter Value"); 
    // }

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { name, address, nic, production, quantity, price, date } = this.state;
    console.log(this.state, "state");
    if (name === "" || address === "" || nic === "" || production === "" || quantity === "" || price === "" || date === "") {
      console.log("Inside if");
      alert("All Details Needed");
      return;
    }
    const data = {

      name: name,
      address: address,
      nic: nic,
      production: production,
      quantity: quantity,
      price: price,
      date: date
    }
    console.log(data)
    // alert('Good...,Plz, Connect your API ', data);
    await axios.post("http://localhost:5000/posts3/save", data).then((res) => {
      if (res.data.success) {
        alert('saved successfully');
        this.setState({
          name: "",
          address: "",
          nic: "",
          production: "",
          quantity: "",
          price: "",
          date: ""

        }
        )
      } else {
        alert('something went wrong');
      }
    })


  }
  render() {
    return (

      <div className="container-fluid" style={{ backgroundColor: '#808080' }}>
        <div className='container fluid'>

        </div>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">

            <h4>Delivery</h4>

          </div>
          <div className="col-lg-3 mt-2 mb-2">

            {/* <input className="form-control" type="search" name="searchQuery" placeholder="Search" ></input> */}
          </div>
        </div>
        <h1 className="h3 mb-3 font-weight-normal">Order Details</h1>
        <form className="needs- validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>NIC</label>
            <input
              type="text"
              className="form-control"
              name="nic"
              value={this.state.nic}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Product Kind (Food/Plant) </label>
            <input
              type="text"
              className="form-control"
              name="production"
              value={this.state.production}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </div>
          {/* <div class="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div> */}

          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            &nbsp; Save
          </button>


        </form>
        <footer class="footer-distributed">

          <div class="footer-left">

            {<img src={Logo} width="50" height="50" />}<h3>Green<span>Lanka</span></h3>

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
        <div>

        </div>

      </div>









    )
  }
}