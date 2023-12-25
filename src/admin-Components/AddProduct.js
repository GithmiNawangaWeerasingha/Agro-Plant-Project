import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import NavBarpic from "./NavBarPic";


export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      price: "",
      description: "",
      photo: "",
      category: ""


    };
  }
  

  handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('first', name, value)


    this.setState({
      ...this.state,
      [name]: value,
    });

   
  };


  fileSelectedHandler = e => {
    this.setState({
      photo: e.target.files[0]
    })
  }






  onSubmit = (e) => {
    e.preventDefault();
    const { pname, price, description, photo, category } = this.state;
    console.log(this.state, "state");
    if (
      pname === "" ||
      price === "" ||
      description === "" ||
      photo === "" ||
      category === ""



    ) {
      console.log("Inside if");
      alert("All Details Needed");
      return;
    }

    const formData = new FormData();
    formData.append('pname', pname)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('photo', photo)
    formData.append('category', category)

    // const data = {
    //   pname: pname,
    //   price: price,
    //   description: description,
    //   photo: photo,
    //   category: category




    // };

    // console.log('formData',photo);
    axios.post("http://localhost:5000/posts1/save", formData).then((res) => {
      console.log('object', res);
      if (res.data.success) {
        this.setState({
          pname: "",
          price: "",
          description: "",
          photo: "",
          category: ""

        });
      }
    });
  };
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: "white" }}>
        <NavBar />
        <NavBarpic />
        <div className="col-md-8 mt-4 mx-auto">

          <h1 className="h3 mb-3 font-weight-normal">Add Products</h1>
          <form className="needs- validation" encType="multipart/form-data">
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

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>category</label>
              <select
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
              >
                 <option value="">select...</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Organic Plants">Organic Plants</option>
                <option value="Fruits">Fruits</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Photo</label>
              <input type="file"
                className="form-control"
                name="photo"
                // accept="image/png , image/jpeg, image/webp"
                // value={this.state.photo}
                onChange={this.fileSelectedHandler} />




            </div>

            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: "15px" }}
              onClick={this.onSubmit}
            >
              &nbsp; Save
            </button>
          </form>

        </div>
      </div>
    );
  }
}
