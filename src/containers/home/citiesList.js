import React from 'react';

const CitiesList = ({ cities }) => {
  return (
    <div>
      {cities.length > 0 && (
        <table className="table table-striped table-hover">
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Temperature</th>
          </tr>
          </thead>
          <tbody>
          {cities.map((city, index) =>
            <tr key={index}>
              <th scope="row">{++index}</th>
              <td>{city.name}</td>
              <td>{city.temp}</td>
            </tr>
          )}
          </tbody>
        </table>) }
    </div>
  );
};

export default CitiesList;