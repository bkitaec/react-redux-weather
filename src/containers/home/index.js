import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateCity } from '../../modules/actions/city'
import AddCityForm from './addCityForm'
import CitiesList from './citiesList'
import { API_GET_WEATHER } from '../../modules/constants/api'
import shallowEqual from '../../modules/utils/shallowEqual'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddCity = this.handleAddCity.bind(this);
    this.state = {
      error: ''
    }
  }

  handleAddCity(e, cityName) {
    e.preventDefault();

    let newCityList = this.props.cities.slice();
    const url = `${API_GET_WEATHER}&q=${cityName}&units=metric`;
    const request = new Request(url, {
      method: 'GET'
    });
    fetch(request)
      .then(response => response.json())
      .then(data => {
        if(data.cod === '404'){
          this.setState({
            error: data.message
          })
        }else{
          newCityList.push({ name: cityName, temp: data.list[0].main.temp });
          this.props.updateCity(newCityList);
          this.setState({
            error: null
          })

        }
      }
      )
      .catch(error => {
        console.log('GET_WEATHER_FAIL', error);
      });
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
  }

  render() {
    const { handleAddCity }  = this;
    const { cities } = this.props;
    const { error } = this.state;

    return (
      <div className="col-md-12">
        <h1>Cities list</h1>
        <AddCityForm handleAddCity={handleAddCity} error={error} />
        <CitiesList cities={cities} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cities: state.city.cities,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCity
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
