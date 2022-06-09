import React from 'react';
import Header from '../Header/Header';

const Transport = () => {
    return (
        <div class='container'>
          <Header></Header>
             <div>
            <table class="table">
  <thead class='bg-success text-light'>
    <tr>
      <th scope="col">SL.No</th>
      <th scope="col">Type of Transport</th>
      <th scope="col">Own</th>
      <th scope="col">Rented</th>
      <th scope="col">Total(s)</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="col">01.</th>
      <th scope="col">Motor Cycle</th>
      <th scope="col">02</th>
    </tr>
  <tr>
      <th scope="col">02.</th>
      <th scope="col"> Bi-cycle</th>
      <th scope="col">15</th>
    </tr>
   
  </tbody>
</table>
            </div>
        </div>
    );
};

export default Transport;