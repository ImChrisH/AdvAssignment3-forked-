import React from "react";

function StatTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Popularity</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jeff Bezos</td>
          <td>10%</td>
          <td>US</td>
        </tr>
        <td>Harry Potter</td>
        <td>40%</td>
        <td>England</td>
        <tr>
          <td>Deadpool</td>
          <td>50%</td>
          <td>Canada</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StatTable;
