import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import footer from "./App.css";
import Logo from "./images/Logo.jpg";
import col from "./App.css";


import photo from "./images/download.jpg";
import NavBar from "./NavBar";
import NavBarpic from "./NavBarPic";

// import React from 'react'

const Deliveryview = () => {
  const [posts4, setPosts4] = useState([])
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     posts4: [],
  //   };
  // }
  const getData = () => {
    axios.get("http://localhost:5000/posts3").then((res) => {
      if (res.data.success) {
        // this.setState({
        //   posts4: res.data.existingPosts,
        // })
        setPosts4(res.data.existingPosts)

        // console.log(this.state.posts4);
      }
    });
  }

  useEffect(() => {
    getData();
  }, [])
  // componentDidMount() {
  //   this.retrievePosts();
  // }

  // retrievePosts() {
  //   axios.get("http://localhost:5000/posts3").then((res) => {
  //     if (res.data.success) {
  //       this.setState({
  //         posts4: res.data.existingPosts,
  //       });

  //       console.log(this.state.posts4);
  //     }
  //   });
  // }

  const onDelete = (id) => {
    axios.delete(`http://localhost:5000/posts3/delete/${id}`).then((res) => {
      alert("Delete Sucesfully");
      getData();
    });
  };

  const filterData = (posts4, searchKey) => {
    

    const filteredData = posts4?.filter((item) => item.name.toLowerCase().includes(searchKey.toLowerCase()));
    // const result = posts4.filter((d) => d.pname == searchKey)
    // const result = posts4.filter((post) =>
    //   post.pname.includes(searchKey)
    // );
   
    setPosts4(filteredData)
    // this.setState({ posts4: result });
  }
  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/posts3").then((res) => {
      if (res.data.success) {
       filterData(res.data.existingPosts, searchKey);
      }
    });
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#808080" }}>
      <NavBar />
      <NavBarpic />
      <div className="container fluid"></div>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Products</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            name="searchQuery"
            placeholder="Search"
            onChange={handleSearchArea}
          ></input>
        </div>
      </div>

      <table
        className="table table-bordered"
        style={{ marginTop: "40px", backgroundColor: "#b0e0e6" }}
      >
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Production</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts4.map((posts4, index) => (
            <tr>
              <th scope="row">{index + 1}</th>

              <td>{posts4.name}</td>
              <td>{posts4.address}</td>
              <td>{posts4.production}</td>
              <td>{posts4.quantity}</td>
              <td>{posts4.price}</td>
              <td>{posts4.date}</td>

              <td>
                <a
                  className="btn btn-danger"
                  href="#"
                  onClick={() => onDelete(posts4._id)}
                >
                  <i className="fas fa-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     

      <footer class="footer-distributed">
        <div class="footer-left">
          {<img src={Logo} width="50" height="50" />}
          <h3>
            Green<span>Lanka</span>
          </h3>

          <p class="footer-links">
            <a href="#" class="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p class="footer-company-name">Green Lanka ©️ 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>444/2nd mailpost,</span> Gregory park road, Nuwaraeliya
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+94522235018</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">GreenLanka@company.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Deliveryview

// export default class DeliveryView extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts4: [],
//     };
//   }

//   componentDidMount() {
//     this.retrievePosts();
//   }

//   retrievePosts() {
//     axios.get("http://localhost:5000/posts3").then((res) => {
//       if (res.data.success) {
//         this.setState({
//           posts4: res.data.existingPosts,
//         });

//         console.log(this.state.posts4);
//       }
//     });
//   }

//   onDelete = (id) => {
//     axios.delete(`http://localhost:5000/posts3/delete/${id}`).then((res) => {
//       alert("Delete Sucesfully");
//       this.retrievePosts();
//     });
//   };

//   filterData(posts4, searchKey) {
//     console.log('result3',posts4, searchKey)
//     const result = posts4.filter((d) => d.pname == searchKey)
//     // const result = posts4.filter((post) =>
//     //   post.pname.includes(searchKey)
//     // );
//     console.log('result0',result)
//     this.setState({ posts4: result });
//   }
//   handleSearchArea = (e) => {
//     const searchKey = e.currentTarget.value;
//     axios.get("http://localhost:5000/posts3").then((res) => {
//       if (res.data.success) {
//         this.filterData(res.data.existingPosts, searchKey);
//       }
//     });
//   };
//   render() {
//     return (
//       <div className="container-fluid" style={{ backgroundColor: "#808080" }}>
//         <NavBar />
//         <NavBarpic />
//         <div className="container fluid"></div>
//         <div className="row">
//           <div className="col-lg-9 mt-2 mb-2">
//             <h4>All Products</h4>
//           </div>
//           <div className="col-lg-3 mt-2 mb-2">
//             <input
//               className="form-control"
//               type="search"
//               name="searchQuery"
//               placeholder="Search"
//               onChange={this.handleSearchArea}
//             ></input>
//           </div>
//         </div>

//         <table
//           className="table table-bordered"
//           style={{ marginTop: "40px", backgroundColor: "#b0e0e6" }}
//         >
//           <thead>
//             <tr>
//               <th scope="col"></th>
//               <th scope="col">Name</th>
//               <th scope="col">Address</th>
//               <th scope="col">Production</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Price</th>
//               <th scope="col">Date</th>

//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.posts4.map((posts4, index) => (
//               <tr>
//                 <th scope="row">{index + 1}</th>

//                 <td>{posts4.name}</td>
//                 <td>{posts4.address}</td>
//                 <td>{posts4.production}</td>
//                 <td>{posts4.quantity}</td>
//                 <td>{posts4.price}</td>
//                 <td>{posts4.date}</td>

//                 <td>
//                   <a
//                     className="btn btn-danger"
//                     href="#"
//                     onClick={() => this.onDelete(posts4._id)}
//                   >
//                     <i className="fas fa-alt"></i>&nbsp;Delete
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

       

//         <footer class="footer-distributed">
//           <div class="footer-left">
//             {<img src={Logo} width="50" height="50" />}
//             <h3>
//               Green<span>Lanka</span>
//             </h3>

//             <p class="footer-links">
//               <a href="#" class="link-1">
//                 Home
//               </a>

//               <a href="#">Blog</a>

//               <a href="#">Pricing</a>

//               <a href="#">About</a>

//               <a href="#">Faq</a>

//               <a href="#">Contact</a>
//             </p>

//             <p class="footer-company-name">Green Lanka ©️ 2022</p>
//           </div>

//           <div class="footer-center">
//             <div>
//               <i class="fa fa-map-marker"></i>
//               <p>
//                 <span>444/2nd mailpost,</span> Gregory park road, Nuwaraeliya
//               </p>
//             </div>

//             <div>
//               <i class="fa fa-phone"></i>
//               <p>+94522235018</p>
//             </div>

//             <div>
//               <i class="fa fa-envelope"></i>
//               <p>
//                 <a href="mailto:support@company.com">GreenLanka@company.com</a>
//               </p>
//             </div>
//           </div>

//           <div class="footer-right">
//             <p class="footer-company-about">
//               <span>About the company</span>
//               Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
//               euismod convallis velit, eu auctor lacus vehicula sit amet.
//             </p>

//             <div class="footer-icons">
//               <a href="#">
//                 <i class="fa fa-facebook"></i>
//               </a>
//               <a href="#">
//                 <i class="fa fa-twitter"></i>
//               </a>
//               <a href="#">
//                 <i class="fa fa-linkedin"></i>
//               </a>
//               <a href="#">
//                 <i class="fa fa-github"></i>
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     );
//   }
// }