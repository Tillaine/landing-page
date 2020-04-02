import React from 'react';
import DetailList from './DetailList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: tempData,
      carId: 2
    };
    this.getAllDetails = this.getAllDetails.bind(this);
  }

  componentDidMount() {
    this.getAllDetails();
  }

  getAllDetails() {
    fetch(`http://localhost:3004/api/details?term=${this.state.carId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        this.setState({
          details: data,
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="header-logo">
          <img src="logo.png" />
        </div>
        <div className="buttons">
        <button> <img className="images" src="contact_us.png"/> </button>
        <button> <img className="images" src="extend_warranty_button.png"/> </button>
        <button> <img className="images" src="get_financing_button.png"/> </button>
        </div>
        <div className="highlighted-features">
        <DetailList
          details={this.state.details}/>
        </div>
      </div>
    );
  }
}

const tempData = [{
  id: 1,
  cost: '13000',
  name: 'Toyota Yaris',
  engine: '1.5L I-4 Cyl',
  color: 'Pulse',
  MPG: '32 mpg City 40 mpg Hwy',
  mileage: '33,886',
  feature_one: 'Wireless phone connectivity',
  feature_two: 'Split folding rear seat',
  feature_three: 'Steering wheel mounted audio controls',
  feature_four: 'Exterior parking camera rear',
  feature_five: 'Remote keyless entry',
  feature_six: 'Alloy wheels' }]

export default App;
