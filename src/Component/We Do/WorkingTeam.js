import React from 'react';
import Header from '../Header/Header';

const WorkingTeam = () => {
    return (
        <div class='container'>
            <Header></Header>
             <div>
            <table class="table">
  <thead class='bg-success text-light'>
    <tr>
      <th scope="col">Particulars</th>
      <th scope="col">Male</th>
      <th scope="col">Female</th>
      <th scope="col">Total</th>
     
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="col">1. Full time paid staffs</th>
      <th scope="col">4</th>
      <th scope="col">3</th>
      <th scope="col">7</th>
     
    </tr>
  <tr>
      <th scope="col">2. Part-time paid staffs</th>
      <th scope="col">4</th>
      <th scope="col">3</th>
      <th scope="col">7</th>
     
    </tr>
  <tr>
      <th scope="col">3.Incentive paid volunteer workers </th>
      <th scope="col">14</th>
      <th scope="col">8</th>
      <th scope="col">22</th>
     
    </tr>
  <tr>
      <th scope="col">1. Full time paid staffs</th>
      <th scope="col">15</th>
      <th scope="col">10</th>
      <th scope="col">25</th>
     
    </tr>
    
    <tr class='bg-success text-light'>
      <th scope="col">Total</th>
      <th scope="col">33</th>
      <th scope="col">21</th>
      <th scope="col">54</th>
     
    </tr>
  

  </tbody>
</table>
            </div>
        </div>
    );
};

export default WorkingTeam;