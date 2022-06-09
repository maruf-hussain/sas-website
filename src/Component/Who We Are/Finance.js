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
      <th scope="col">Name of the Bank</th>
      <th scope="col">Branch with address</th>
      <th scope="col">Name of the account</th>
      <th scope="col">Type of Bank A/C</th>
      <th scope="col">Account No.(s)</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="col">Dutch-Bangla Bank Ltd.</th>
      <th scope="col">Dholaikhal Branch, Dhaka</th>
      <th scope="col">Social Advancement Society</th>
      <th scope="col">Current Account</th>
      <th scope="col">3051200000267</th>
    </tr>
   
  </tbody>
</table>
            </div>
             
        </div>
    );
};

export default Finance;