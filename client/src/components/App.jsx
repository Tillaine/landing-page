import React from 'react';
import DetailList from './DetailList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    };
    this.getAllDetails = this.getAllDetails.bind(this);
  }

  componentDidMount() {
    this.getAllDetails();
  }

  getAllDetails() {
    fetch('http://localhost:3004/api/details')
      .then((response) => response.json())
      .then((data) => {
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

const tempData = 
[{_id: '5e8cfff5a4f4160aa62c373b',
name: 'Toyota Yaris',
price: 9000,
engine: '1.8L I-4 Cyl',
color: 'Barbie Pink',
MPG: '1.5L I-4 Cyl',
mileage: 78320,
feature_one: 'pay phone',
feature_two: 'Front dual zone A/C',
feature_three: 'Alloy wheels',
feature_four: 'Remote keyless entry',
feature_five: 'Parking sensors',
feature_six: 'Alloy wheels',
id: 20 }]
export default App;
