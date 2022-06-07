import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import WebhookIcon from '@mui/icons-material/Webhook';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import './Mission.css'

const Mission = () => {
    return (
        <div class='who-mai'>
        <div class='row'>
        <div class=' mx-auto mb-5 '>
                  <h1>OUR MISSION</h1>
                  
                  <h4 class='  mx-auto text-dark'>SAS works to ensure full potential of male, female,youth adolescents sector where disadvantaged more people can<br/> identify-their problems and ensure.</h4>
                  </div>
              
        
        
        
        
        <div class='mission-sub-1 ' >
                    <div class="card">
                    <WebhookIcon className='mission-icon' />
          <div class="card-body">
            <h5 class="card-title">Development</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
          </div>
        </div>
                    <div class="card ">
                   <HealthAndSafetyIcon className='mission-icon' />
          <div class="card-body">
            <h5 class="card-title">Health</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
          </div>
        </div>
                    <div class="card " >
          <SchoolIcon className='mission-icon'/>
          <div class="card-body">
            <h5 class="card-title">Education</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
          </div>
        </div>
           </div>
                    <div class='mission-sub-2 ' >
                    <div class="card">
          <AgricultureIcon className='mission-icon'/>
          <div class="card-body">
            <h5 class="card-title">Agricultural</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
          </div>
        </div>
                    <div class="card ">
          <AccessibilityIcon className='mission-icon'/>
          <div class="card-body">
            <h5 class="card-title">Livelihood</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
          </div>
        </div>
                    <div class="card" >
         <NaturePeopleIcon className='mission-icon'/>
          <div class="card-body">
            <h5 class="card-title">Environment</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
          </div>
        </div>
                    </div>
             
        
    
        
        
        </div>
        
                
            
           
        
                </div>
    );
};

export default Mission;