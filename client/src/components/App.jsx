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
          details: data.details,
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

export default App;
