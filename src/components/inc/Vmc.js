import React from 'react';



function VMC(){
return(
<section className="section bg-c-light border-top">
<div className="container">
  <div className='row'>
    <div className='col-md-12 mb-3 mx-2 text-center'>
      <h3 className='main-heading'>Vision , Mission and Values</h3>
      <div className='underline mx-auto'></div>                           
    </div>
    <div className='col-md-4 text-center' style={{backgroundColor:"#ffbc4f"}}>
    <h6 className='VMC' style={{color:"#000000"}}>Our Vision</h6>
      <p>
      Enrich the lives by providing sustainable products while reducing the impact on environment to ensure a healthy future of the people and the planet.
      </p>
    </div>
    <div className='col-md-4 text-center'style={{backgroundColor:"#feda89"}}>
      <h6 className='VMC' style={{color:"#000000"}}>Our Mission</h6>
      <p>
      Offer the goods with better choices to improve the quality of the lives in modern society.
      </p>
    </div>
    <div className='col-md-4 text-center'style={{backgroundColor:"#ffbc4f"}}>
    <h6 className='VMC' style={{color:"#000000"}}>Our Values</h6>
      <p>
      Fair business practices help nurture growth, innovation, entrepreneurship and leadership at all levels of the society. This forms the base for a healthy society, dutiful citizens and a strong nation.
      </p>
    </div>
  </div>
</div>
</section>
);
}

export default VMC;
