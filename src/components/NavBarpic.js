import React,  {Component} from 'react';
import Slider from './Slider';



export default class NavBarpic  extends Component{
  render(){
    return(
      <div className='navbarpic-dark bg-dark shadow'>
        <Slider/>
          <div className='container'>
            <div className='row'>
              <div className='col-mid-12'>
                
                <nav class="navbarpic navbarpic-expand-lg">
                  
                  <div className='container-fluid'/>
                  
                </nav>
              </div>
            </div>
          </div>
       </div>
  
)
    }
}