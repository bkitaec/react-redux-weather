import React from 'react';

const AddCityForm = ({ handleAddCity, error }) => {
  return (
    <div>
      <form onSubmit={(e) => {handleAddCity(e, this.cityName.value);}}>
        <div className="form-group">
          <label>Add city to the list</label>
          <input type="text" ref={ref => this.cityName = ref} className="form-control" placeholder="type the city name" />
          {error &&
            <span className="red-text">{error}</span>}
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
};

export default AddCityForm;