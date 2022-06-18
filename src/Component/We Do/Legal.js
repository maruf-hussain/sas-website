import React from 'react';
import Header from '../Header/Header';

const Legal = () => {
    return (
        <div class='container'>
            <Header></Header>
             <div>
            <table class="table">
  <thead class='bg-success text-light'>
    <tr>
      <th scope="col">01.</th>
      <th scope="col">Name of the Institute</th>
      <th scope="col">Registration No</th>
      <th scope="col">Date Of Registration</th>
      <th scope="col">Remark</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <th scope="col">01</th>
      <th scope="col">Social Welfare</th>
      <th scope="col">Bari-660/2000</th>
      <th scope="col">23/08/2003</th>
      <th scope="col"></th>
      
    </tr>
  <tr>
  <th scope="col">02</th>
      <th scope="col">NGO Affairs Bureau</th>
      <th scope="col">FDR-2162</th>
      <th scope="col">21/11/2006</th>
      <th scope="col"></th>
      
    </tr>
  <tr>
  <th scope="col">03</th>
      <th scope="col">Registration no.</th>
      <th scope="col">DNC 0055</th>
      <th scope="col">06/02/2006</th>
      <th scope="col"></th>
      
    </tr>
   
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Legal;