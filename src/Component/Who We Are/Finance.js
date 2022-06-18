import React from 'react';
import Header from '../Header/Header';

const Finance = () => {
    return (
        <div class='container'>
            <Header></Header>
           <div >
            <table class="table">
  <thead class='bg-success text-light'>
    <tr>
      <th scope="col">Bank Name</th>
      <th scope="col">Branch Address</th>
      <th scope="col">Account Name</th>
      <th scope="col">C/A Account No</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="col">Dutch-Bangla Bank Ltd.</th>
      <th scope="col">Dholaikhal Branch, Dhaka</th>
      <th scope="col">Social Advancement Society</th>
      <th scope="col">3051200<br/>000267</th>
    </tr>
   
  </tbody>
</table>
            </div>
             
        </div>
    );
};

export default Finance;