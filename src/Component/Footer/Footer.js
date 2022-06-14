import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'
const Footer = () => {
    return (
        <div class='footer-ma'>
        <div class='row'>
        <div class='col-md-6 col-sm-4 mx-auto'>
          
          <img  class='pt-2 imj' src='https://i.ibb.co/M7Xk5ZW/280409888-1661343877584871-6408246260806431005-n.png' alt='img'></img>
          
         
         <div>
         <p class='p-4'>Social Advancement Society (SAS) is a non - governmental and non-profitable voluntary social development organization established in  year 1996 by a group of
          young men and women. </p> 
         </div>
        
         </div>


         <div class='col-md-12 col-sm-4 footer-hero '>
        <div >
            <p class='contact'>Contact</p>
            <p>Head office: Shajher Maya, 104, Baptist Mission Road,
Barisal, Bangladesh.<br/>

Dhaka Office: Azad Center, Suite# 7/A (Lebel-7),
55, PUrana Paltan, Dhaka-1000, Bangladesh.<br/>
Phone: 02-223385580, cell# 01738635971, 01714806502<br/>

E-mail: sas.bd2020@gmail.com,   www.ngosas.org</p>
        </div>
        <div>
<div>
<p class='management'>Management Structure</p>
            <p> 
General Body<br/>
Executive Committee<br/>
General Administration
</p>
<div>
</div>
         
<div class="d-flex mt-5  ">
      <FacebookIcon className='fb-icon'/>
      <WhatsAppIcon className='whats-icon'/>
      <YouTubeIcon className='youtube-icon' />
      <TwitterIcon className='twitter-icon'/>
      <InstagramIcon className='ins-icon'/>
      
      
        </div>
</div>
        </div>
        <div>
            <p className='network'>Networking and Coordination</p>
            <p>Member of the STD & AIDS Network of Bangladesh.<br/>
Partner of the NGO Forum<br/>
Member of the Barisal NGO Coordination<br/>
Member of the HABITAT Council<br/>
Member of the Bangladesh Pollution Elimination Network (BPEN)<br/>
Member of the Barisal Women’s Rights Alliance<br/>
Alliance for Food Sovereignty Campaign (AFSC)</p>
        </div>

        </div>

<div>
<nav class="navbar  bg-danger">
<div class="container-fluid">
  
  <span class="navbar-text">
  Privacy Policy  <span class='ms-5'>Terms of Use   ©2022 SAS </span>
  </span>
</div>
</nav>
</div>


        </div>

      </div>
    );
};

export default Footer;