import React from 'react';
import { Link } from 'react-router-dom';
import './Who.css'
const Who = () => {
    return (
        <div className='container mt-5'>
          <div class='row' >

<div className='who-sab'>
<div>
<img class='imj-who' src='https://img.freepik.com/free-vector/businessman-top-looking-into-telescope-employees-business-opportunity-bizopp-franchising-distribution-concept-white-background_335657-2028.jpg?t=st=1654313429~exp=1654314029~hmac=adfcbaacde7ba7a592c65bfec2e9b9a5cc390a1393475793ef4494ae251d6d14&w=996
' alt='img'></img>
</div>
<div class=''>

<div>
<h1 class=''>WHO WE ARE</h1>  
<h3>SAS works to ensure full <br/>potential of male, female, youth & adolescents</h3>
<h3>To organize the target peoples into group </h3>
<h3>SAS believes in partnership work</h3>
<Link className='lern' to="/learnmore">Learn More</Link>
</div>

<div class='mt-5'>
<Link className='lb' to="/vision">VISION</Link>
<Link className='lb' to="objective">OBJECTIVE</Link>
<Link className='lb' to="/goal">GOAL</Link>
</div>  

  </div>
</div>

            
            </div>
      
         
        </div>
    );
};

export default Who;