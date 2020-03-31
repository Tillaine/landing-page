import React from 'react';

const DetailListItem = (props) => {
  return (
    <div>
      <li style={{listStyleType: "none"}}><i className="fab fa-bluetooth-b" style={{color: "green"}}></i> {props.feature_one}</li>
      <li style={{listStyleType: "none"}}><i className="fas fa-check" style={{color: "green"}}></i> {props.feature_two} </li>
      <li style={{listStyleType: "none"}}><i className="fas fa-check" style={{color: "green"}}></i> {props.feature_three}</li>
      <li style={{listStyleType: "none"}}><i className="fas fa-camera" style={{color: "green"}}></i> {props.feature_four}</li>
      <li style={{listStyleType: "none"}}><i className="fas fa-key" style={{color: "green"}}></i> {props.feature_five}</li>
      <li style={{listStyleType: "none"}}><i className="fas fa-car" style={{color: "green"}}></i> {props.feature_six}</li>
      <h3>
      <li style={{listStyleType: "none"}}><i className="fas fa-car" style={{color: "green"}}></i> {props.engine}</li>
      <li style={{listStyleType: "none"}}><i className="fas fa-gas-pump" style={{color: "green"}}></i> {props.MPG} </li>
      <li style={{listStyleType: "none"}}><i className="fas fa-oil-can" style={{color: "green"}}></i> Mileage: {props.mileage} Miles </li>
      </h3>
    </div>
  )
}

export default DetailListItem;