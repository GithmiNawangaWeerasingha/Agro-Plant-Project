import React,  {Component} from 'react';
import axios from 'axios';
import Logo from "./images/Logo.jpg";

export default class Another extends Component{
    constructor(props){
        super(props);
        this.state={
            ename:"",
            address:"",
            nic:"",
            position:"",
            salary:""
        }
    }

    handleInputChange = (e) =>{
        const{name,value} = e.target;
       
        // if(value){
        //     alert("Please Enter Value"); 
        // }

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit =(e) =>{
        e.preventDefault();
        const {ename,address,nic,position,salary} = this.state;
        console.log(this.state,"state");
        if(ename === "" || address==="" || nic==="" || position==="" || salary===""){
            console.log("Inside if");
            alert("All Details Needed");
            return;
        }
        const data={
            ename:ename,
            address:address,
            nic:nic,
            position:position,
            salary:salary
        }
        console.log(data)
        axios.post("post/save",data).then((res)=>{
            if(res.data.success){
                this.setState({
                    ename:"",
                    address:"",
                    nic:"",
                    position:"",
                    salary:""

                }
                   


                )
            }
        })


    }
  render(){
    return(
        
        <div className="container-fluid" style={{backgroundColor:'#808080'}}>
          <div className='container fluid'>
          
          </div>
            <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                  
                    <h4>All Employees</h4>
                    
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                    
                        <input className="form-control" type="search" name="searchQuery" placeholder="Search" ></input>
                </div>
            </div>
            <table className ="table table-bordered" style={{marginTop:'40px' , backgroundColor:'#b0e0e6'}}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col"> NIC</th>
              <th scope="col">Position</th>
              <th scope="col">Salary (Rs.)</th>
              <th scope="col">Action</th>

              

              

            </tr>
          </thead>
        <tbody>
         
            <tr>
           
           
            <td></td>
            <td>Nimal</td>
            <td>panadura</td>
            <td>12345567V</td>
            <td>ASE</td>
            <td>5000</td>
          
            <td>
              <a className="btn btn-warning">
                <i className="fas fa-edit"></i>&nbsp;Edit
              </a>
              &nbsp;
             
              &nbsp;
              <a className="btn btn-danger">
                <i className="fas fa-alt"></i>&nbsp;Delete
              </a> 
            </td>
            </tr>
          

         
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Employee</a></button>
            
        
       

<footer class="footer-distributed">

    <div class="footer-left">

    {<img src={Logo} width="50" height="50"  />}<h3>Green<span>Lanka</span></h3>

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