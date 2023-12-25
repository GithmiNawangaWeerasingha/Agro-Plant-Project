import React, { Component } from "react";



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          localStorage.setItem('profile', data?.isAdmin)
          window.location.href = "/admin-home";
        }
      });
  }
  render() {
    return (
      <div className="container-fluid" style={{ background: "green", border:"1px solid #dddfe2", boxShadow:"0 2px 4px rgb(0 0 10 / 64%), 0 8px 16px rgb(0 10 0 / 34%)",width:"400px",borderRadius: "8px", padding: "1rem", alignItems: "center",textAlign: "center" }}>
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3" >
          <label>Email address</label>

          <input style={{ borderRadius: "20px", background: "#1d2129" , margin: "2%", width: "90%", padding: "12px", fontSize: "16px"}}
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input style={{borderRadius: "20px", background: "#1d2129" , margin: "2%", width: "90%", padding: "12px", fontSize: "16px"}}
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>


        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/register">Sign Up</a>
        </p>
      </form>
      </div>
    );
  }
}