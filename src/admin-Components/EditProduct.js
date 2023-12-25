import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import NavBarpic from "./NavBarPic";


export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      price: "",
      description: ""
      
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onUpdate = (e) => {
    //const id = this.props.match.params.id;
    e.preventDefault();
    console.log(e);

    //const id = this.props.match.params.id;
    // console.log(window.location.pathname.split('/edit/')[1]);
    const id = window.location.pathname.split("/admin-editproduct/")[1];
    //console.log(id);
    //console.log(params);
    const { pname, price, description} = this.state;

    const data = {
      pname: pname,
      price: price,
      description: description
      
    };
    console.log(data);
    axios.put(`http://localhost:5000/posts1/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Update Sucessfully");
        this.setState({
          pname: res.data.put.pname,
          price: res.data.put.price,
          description: res.data.put.description
          
        });
      }
    });
    //e.target.reset();
    this.setState({
        pname: "",
        price: "",
        description: ""
    });
  };

  componentDidMount() {
    console.log(window.location.pathname.split("/admin-editproduct/")[1]);
    const id = window.location.pathname.split("/admin-editproduct/")[1];

    axios.get(`http://localhost:5000/posts1/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
            pname: res.data.posts1.pname,
            price: res.data.posts1.price,
            description: res.data.posts1.description,
        });
        console.log(this.state.posts1);
      }
    });
  }
  render() {
    // const { location, history } = this.props;
    // console.log(window.location.pathname.split('/edit/')[1]);
    return (
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <NavBar />
      <NavBarpic />
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Update Products</h1>
        <form
          onSubmit={this.onUpdate.bind(this)}
          className="needs- validation"
          noValidate
        >
           <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Product Name</label>
            <input
              type="text"
              className="form-control"
              name="pname"
              value={this.state.pname}
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
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>


          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
          >
            &nbsp;Update
          </button>
        </form>
      </div>
      </div>
    );
  }
}
