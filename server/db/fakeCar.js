const { addManyCars } = require('../models/detailsModel.js')
const name = ['Tesla Pretense', 'Ford Bronco', 'Nissan Thunder Punch', 'Kia Forte', 'Ford Focus', 'Kia Soul',
 "Toyota it'ill run", 'Toyota Yaris', 'Nissan Sentra', 'Ford Focus', 'Nissan Sentra', 'Hyundai Accent',
  'Kia Rio S', 'Chevrolet Cruze',]

  const price =  [12000, 9000, 13123, 43290, 432329, 23788, 43566, 6000, 1544, 12887]

  const engine = ['1.5L I-4 Cyl', '1.8L I-4 Cyl', '2.0L I-4 Cyl', '1.8L I-4 Cyl', '1.12L I-6 Cyl']
  const color = ['Pinot Nior', 'Blind Rage Black', 'My Hearts So Blue', 'covid graphic red', 'Galvanize Orange', 'Secure Masculinity Pink' ]
  const MPG = []
  const mileage = [1000, 45, 0, 78320, 454839, 5438924, 54378297,983242, 923489, 542890, 543289, 109, 4320, 5429]
  const feature = ['That thing your firend has', 'Parking sensors', 'Front dual zone A/C', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Emergency communication system', 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels']
  let id = 1;
const getDetail = (detail) => {
    return detail[Math.floor(Math.random() * detail.length)]
}


const fakeCar = () => {
    const car = {}
    car.name = getDetail(name)
    car.price = getDetail(price)
    car.engine = getDetail(engine)
    car.color = getDetail(color)
    car.MPG = getDetail(MPG)
    car.mileage = getDetail(mileage)
    car.feature_one = getDetail(feature)
    car.feature_two = getDetail(feature)
    car.feature_three = getDetail(feature)
    car.feature_four = getDetail(feature)
    car.feature_five = getDetail(feature)
    car.feature_six = getDetail(feature)

    return car;
}



createCars = (num) => {
    const batchsize = 100000
    const numOfBatches = num/batchsize
    for(let i = 0; i< numOfBatches; i++){
        const cars = carBatch(batchsize)
        addManyCars(cars)
    }

// const cars = await carBatch(num)




}

const carBatch = (num) => {   
const cars = [] 
    for(let i = 0; i< num; i++){
    let newCar = fakeCar();
    newCar.id = id;
    cars.push(newCar)
    id++;
    }   
return cars

}


createCars(2000000)
 
// -- ['Tesla Pretense', 'Ford Bronco', 'Nissan Thunder Punch', 'Kia Forte', 'Ford Focus', 'Kia Soul', "Toyota it'ill run", 'Toyota Yaris', 'Nissan Sentra', 'Ford Focus', 'Nissan Sentra', 'Hyundai Accent', 'Kia Rio S', 'Chevrolet Cruze',]


// -- { "id": "11",
// --   "cost": "23000",
// --   "name": "Toyota Yaris",
// --   "engine": "1.5L I-4 Cyl",
// --   "color": "Pulse",
// --   "MPG": "32 mpg City 40 mpg Hwy",
// --   "mileage": "33,886",
// --   "feature_one": "Wireless phone connectivity",
// --   "feature_two": "Split folding rear seat",
// --   "feature_three": "Steering wheel mounted audio controls",
// --   "feature_four": "Exterior parking camera rear",
// --   "feature_five": "Remote keyless entry",
// --   "feature_six": "Alloy wheels" }

module.exports = fakeCar