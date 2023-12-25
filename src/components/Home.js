import React, { useEffect, useState } from 'react'
import Logo from "./images/Logo.jpg";
import Category from "./Category";
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState([]);
  const [useToFiterData, setUseForFilter] = useState([]);
  const [searchDate, setSearchData] = useState('')

  const GetData = () => {
    axios.get("http://localhost:5000/posts1").then((res) => {
      if (res.data.success) {

        setData(res.data.existingPosts,)
        setUseForFilter(res.data.existingPosts,)

      }
    });
  }

  useEffect(() => {
    const user = (JSON.parse(localStorage.getItem('profile')));
    if (user) {
      localStorage.clear();
      window.location.reload();
    }

    axios.get("http://localhost:5000/posts1").then((res) => {
      if (res.data.success) {

        setData(res.data.existingPosts,)
        setUseForFilter(res.data.existingPosts,)
      }
    });


  }, [])

  useEffect(() => {
    

    if (!searchDate.length) return GetData();
    const filteredData = useToFiterData?.filter((item) => item.pname.toLowerCase().includes(searchDate.toLowerCase()));

    
    if (filteredData.length) {
      setData(filteredData);
    } else {
      GetData()
    }
  }, [searchDate])
  
  return (
    <div className="container-fluid" style={{ backgroundColor: '#fffff' }}>
      <div className='container fluid'>
      </div>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
        </div>
        <div className="col-lg-3 mt-2 mb-2">

          {/* <input className="form-control" type="search" name="searchQuery" placeholder="Search" ></input> */}
          <input className="form-control" type="search" name="searchQuery" placeholder="Search" value={searchDate} onChange={(e) => setSearchData(e.target.value)} />
        </div>
      </div>

      <Category data={data} setData={setData} />

      {/* <CartProvider>
           <Cart/></CartProvider> */}



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
            <p>444/2nd mailpost,<br />Gregory park road, Nuwaraeliya</p>
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



      <div>

      </div>

    </div>


  )
}

export default Home