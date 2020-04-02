import React from 'react';
import DetailListItem from './DetailListItem.jsx';
// import DetailListHighlightItem from './DetailListHighlightItem.jsx';

const DetailList = (props) => {
  console.log('data in list', props.details)
  let DetailListComponents = props.details.map( (currentItem) => {
    return (
      <DetailListItem 
        key={currentItem.id}
        cost={currentItem.cost}
        name={currentItem.name}
        engine={currentItem.engine}
        MPG={currentItem.MPG}
        mileage={currentItem.mileage} 
        feature_one={currentItem.feature_one}
        feature_two={currentItem.feature_two}
        feature_three={currentItem.feature_three}
        feature_four={currentItem.feature_four}
        feature_five={currentItem.feature_five}
        feature_six={currentItem.feature_six} />
    )
  });
 
  return (
    <ul>
      {props.details.name}
      <h3>Highlighted Details</h3>
      {DetailListComponents}
    </ul>
  )

};


export default DetailList;
