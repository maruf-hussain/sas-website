import React from 'react';
import { Link } from 'react-router-dom';
import './WeDo.css'
const WeDo = () => {
    return (
        <div className='we-do' >
          <h1 class='text-center'>WHAT WE DO</h1>
<div className='we-sub'>
  <div>
    <div><img  src="https://img.freepik.com/free-photo/business-team-holding-together-fresh-green-sprout_252847-28925.jpg?size=626&ext=jpg&uid=R55464876&ga=GA1.2.1476649080.1653429844" class="card-img-top" alt="..."></img></div>
    <div><h4 className='fl'>Development Approaches</h4>
    <Link  className='lnk fd' to="/aproch">Read More</Link>
    </div>
  </div>
  <div className='we-cad'>
    <div><img src="https://img.freepik.com/free-photo/close-up-people-holding-box_23-2149196123.jpg?size=626&ext=jpg&uid=R55464876&ga=GA1.2.1476649080.1653429844" class="card-img-top" alt="..."></img></div>
    <div><h4 className='strategy'>Starategy</h4>
    <Link className='lnk' to="/strategy">Read More</Link>
    </div>
  </div>
  <div className='we-cad'>
    <div><img src="https://img.freepik.com/free-photo/workaholic-african-american-leader-standing-front-presentation-monitor-explaining-marketing-pr_482257-8237.jpg?size=626&ext=jpg&uid=R55464876&ga=GA1.2.1476649080.1653429844" class="card-img-top" alt="..."></img></div>
    <div><h4>Development Patrons</h4>
    <Link className='lnk' to="/patrons">Read More</Link>
    </div>
  </div>
  
</div>

         
      </div>
    );
};

export default WeDo;