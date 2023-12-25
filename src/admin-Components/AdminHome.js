import React, { Component } from "react";
import axios from "axios";
import footer from "./App.css";
import Logo from "./images/Logo.jpg";
import col from "./App.css";
import NavBar from "./NavBar";
import NavBarpic from "../components/NavBarpic";
// import NavBarpic from "./NavBarpic";



export default class AdminHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:5000/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:5000/post/delete/${id}`).then((res) => {
      alert("Delete Sucesfully");
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.ename.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:5000/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };
  render() {
    return (
     
      
      
      <div className="container-fluid" style={{ backgroundColor: "#808080" }}>
         <NavBar />
      <NavBarpic />
        <div className="container fluid"></div>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>DashBoard</h4>
          </div>
          
          <section class="hero text-center text-light">
				<div class="hero-bg"></div>
				<div class="hero-particles-container">
					<canvas id="hero-particles"></canvas>
				</div>
                <div class="container-sm">
                    <div class="hero-inner">
						<div class="hero-copy">
	                        <h1 class="hero-title mt-0">Landing template for startups</h1>
	                        <p class="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
	                       
						</div>
						<div class="mockup-container">
							<div class="mockup-bg">
								
							</div>
							
						</div>
                    </div>
                </div>
            </section>

			
        </div>

       

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

            <p class="footer-company-name">Green Lanka © 2022</p>
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
}
