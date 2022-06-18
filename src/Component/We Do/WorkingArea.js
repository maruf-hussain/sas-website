import React from 'react';
import Header from '../Header/Header';

const WorkingArea = () => {
    return (
        <div class='container'>
            <Header></Header>
             <div>
          
<table class="table">
<thead class='bg-success text-light'>
<tr>
<th scope="col">Dostric</th>
     <th scope="col">Upozela</th>
      <th scope="col">Union</th>
      <th scope="col">Village</th>
      <th scope="col">Puro</th>
       
</tr>
</thead>
<tbody>
<tr>
<th scope="col">Borishal</th>
       <th scope="col">Sodor</th>
      <th scope="col">11</th>
       <th scope="col">55</th>
      <th scope="col">01</th>
</tr>
<tr>
<th scope="col">Jhalokathi</th>
<th scope="col">Sodor</th>
<th scope="col">8</th>
<th scope="col">5</th>
<th scope="col">01</th>

</tr>

<tr>
<th scope="col">Potuakhali</th>
<th scope="col">Sodor</th>
<th scope="col">3</th>
<th scope="col">6</th>
<th scope="col">-</th>

</tr>
<tr>
<th scope="col">Rajbari </th>
<th scope="col">Baliakandi</th>
<th scope="col">4</th>
<th scope="col">12</th>
<th scope="col">-</th>

</tr>

<tr class='bg-success text-light'>
<th scope="col">Total 04</th>
    <th scope="col">10</th>
      <th scope="col">52</th>
     <th scope="col">485</th>
     <th scope="col">02</th>
</tr>


</tbody>
</table>




            </div>
        </div>
    );
};

export default WorkingArea;