import React,  {Component} from 'react';
import axios from 'axios';

export default class CreatePost extends Component{
    constructor(props){
        super(props);
  }
  render(){
    return(
        
        <div className="col-md-8 mt-4 mx-auto">
            <h1 className="h3 mb-3 font-weight-normal">Add New Employee</h1>
            <form className="needs- validation" noValidate >
                <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Name</label>
                    <input type="text" className="form-control" name="ename"   />
                </div>

                <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Address</label>
        <input type="text" className="form-control" name="address"/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>NIC</label>
        <input type="text" className="form-control" name="nic" />
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Position</label>
        <input type="text" className="form-control" name="position" />
        </div>
        <div className="form-group" style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Salary</label>
        <input type="number" className="form-control" name="salary"  />
        </div>
        {/* <div class="alert alert-primary" role="alert">
            This is a primary alert—check it out!
        </div> */}

        <button className="btn btn-primary" type="submit" style={{marginTop:'15px'}} >&nbsp; Save</button>



            </form>
        

        </div>

   
    

    
    
    
    
    )
  }
}