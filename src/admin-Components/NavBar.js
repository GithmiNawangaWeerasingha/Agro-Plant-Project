import React, { Component } from "react";
import Logo from "./images/head.jpeg";
// import navbarnav from "./Nav.css";
export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {<img src={Logo} width="50" height="50" />}
                <a class="navbar-brand" href="#">
                    Green Lanka
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/admin-home">
                                DashBoard
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin-employee">
                                Employee

                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin-viewproduct">
                                Products
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/admin-Deliveryview">
                                Delivery
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">

                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                    }}
                    id="logOut"
                >
                    Logout
                </button>
            </nav>
        );
    }
}
