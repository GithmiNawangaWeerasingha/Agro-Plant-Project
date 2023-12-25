import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';
import NavBarpic from './components/NavBarpic';
import footer from './components/footer';
import Another from './components/Another';
import Delivery from './components/Delivery';
import Deliveryview from './components/Deliveryview';
import About from './components/About';

import Instructor from './components/instructor'
import Login from './components/login/Login';
import Register from './components/login/Register';
import AdminHome from './admin-Components/AdminHome';
import Employee from './admin-Components/Employee';
import AdminEditPost from './admin-Components/AdminEditPost';
import AdminCreatePost from './admin-Components/AdminCreatePost';
import AdminPostDetails from './admin-Components/AdminPostDetails';
import AdminProductView from './admin-Components/AdminProductView';
import AddProduct from './admin-Components/AddProduct';
import EditProduct from './admin-Components/EditProduct';
import DeliveryView from './admin-Components/Deliveryview';


export default class App extends Component {


  render() {
    const user = (JSON.parse(localStorage.getItem('profile')));

    
    return (

      <BrowserRouter>



        <div className="container-fluid">

        {!user && <NavBar />}
        {!user && <NavBarpic />}
          <footer />
          <Routes>

            <Route path="/" exact element={<Home />}></Route>
            <Route path="/add" element={<CreatePost />}></Route>
            <Route path="/edit/:id" element={<EditPost example="foo" />}></Route>
            <Route path="/post/:id" element={<PostDetails />}></Route>
            <Route path="/addnew" element={<Another />}></Route>
            <Route path="/adddeliver" element={<Delivery />}></Route>
            <Route path="/viewdeliver" element={<Deliveryview />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/instructor" element={<Instructor />}></Route>

            <Route path="/admin" exact element={<Login />} />
            <Route path="/sign-in" exact element={<Login />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/admin-home" element={user?<AdminHome />: <Navigate to="/sign-in" />}></Route>
            <Route path="/admin-employee" element={user?<Employee />: <Login />}></Route>
            <Route path="/admin-add" element={user?<AdminCreatePost />: <Login />}></Route>
            <Route path="/admin-edit/:id" element={user?<AdminEditPost example="foo" />: <Login />}></Route>
            <Route path="/admin-post/:id" element={user?<AdminPostDetails />: <Login />}></Route>
            <Route path="/admin-viewproduct" element={user?<AdminProductView />: <Login />}></Route>
            <Route path="/admin-addproduct" element={user?<AddProduct />: <Login />}></Route>
            <Route path="/admin-editproduct/:id" element={user?<EditProduct example="fff" />: <Login />}></Route>
            <Route path="/admin-Deliveryview" element={user?<DeliveryView />: <Login />}></Route>
          </Routes>




        </div>


      </BrowserRouter>
    )
  }
}