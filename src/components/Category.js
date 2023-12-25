//import { Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import card from "./index.css";
// import { useCart} from "react-use-cart";

// const { addItem } = useCart();


const Category = ({data, setData}) => {
  // const user = (JSON.parse(localStorage.getItem('profile')));
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   if(user){
  //     localStorage.clear();
  //     window.location.reload();
  //   }
    
  //   axios.get("http://localhost:5000/posts1").then((res) => {
  //     if (res.data.success) {

  //       setData(res.data.existingPosts,)

  //     }
  //   });


  // }, [])

  

  const filterResult = async (catItem) => {
    let filterData
    await axios.get("http://localhost:5000/posts1").then((res) => {
      if (res.data.success) {

        filterData = res.data.existingPosts

      }
    });

    if (catItem === "All") {
      return setData(filterData);
    } else {
      const result = filterData.filter((curData) => {
        return curData.category === catItem;
      });
      if(filterData.length) {
        setData(result);
      }
      
    }




  }
  return (
    <>
      <div class="name">
        <h2 >Let's Shop</h2></div>
      <div className="container-fluid py-4 container">
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Well done!</h4>
          <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
          <hr />
          <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
        <div className="row mt-12 justify-content-center">
          <div className="col-md-3">
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-outline-success w-100 mb-4" onClick={() => filterResult("Fruits")}>Fruits</button>
              <button type="button" class="btn btn-outline-success w-100 mb-4" onClick={() => filterResult("Vegetables")}>Vegetables</button>
              <button type="button" class="btn btn-outline-success w-100 mb-4" onClick={() => filterResult("Organic Plants")}>Organic Plants</button>
              <button type="button" class="btn btn-outline-success w-100 mb-4" onClick={() => filterResult("All")}>All</button>
            </div>
          </div>
          <hr className="border border-secondary border-2" />
          <div className="col-md-12 mb-2 mx-5">
            <div className="row">
              {data.map((values) => {
                const { id, pname, price, photo, description
                } = values;
                return (
                  <>


                    {/* <div class=" row mt-5 mx-2">
<div className="col-md-4 "key={id}>
<div className="card p-0 overflow-hidden h-100 shadow">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>
<div class=" row mt-5 mx-2">
<div className="col-md-4 "key={id}>
<div className="card p-0 overflow-hidden h-100 shadow">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div> */}

                    <div className="col-md-3 " key={id}>
                      <div className="card overflow-hidden h-100 shadow">
                        <img src={`http://localhost:5000/public/${photo}`} class="card-img-fluid" alt={pname} />
                        <div classNames="card-body">
                          <h5 className="card-title">{pname}</h5>
                          <p>Price: {price}</p>
                          <p className="card-text">{description}</p>
                          <a href="/adddeliver" className="btn btn-dark">Buy Now</a>
                          <a href="/adddeliver" className="btn btn-success">Add to Cart</a>

                        </div>
                      </div>
                    </div>

                  </>
                )
              })}

            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Category;


