DROP DATABASE IF EXISTS cars;
CREATE DATABASE cars;
USE cars;


DROP TABLE IF EXISTS venicle;

CREATE TABLE venicle
(
  id INTEGER NOT NULL
  AUTO_INCREMENT,
  cost VARCHAR
  (25) NOT NULL DEFAULT 250,
  name VARCHAR
  (25) NOT NULL,
  engine VARCHAR
  (25) NOT NULL,
  color VARCHAR
  (25) NOT NULL,
  MPG VARCHAR
  (250) NOT NULL,
  mileage VARCHAR
  (250)NOT NULL DEFAULT 5000,
  feature_one VARCHAR
  (250) NOT NULL,
  feature_two VARCHAR
  (250) NOT NULL,
  feature_three VARCHAR
  (250) NOT NULL,
  feature_four VARCHAR
  (250) NOT NULL,
  feature_five VARCHAR
  (250) NOT NULL,
  feature_six VARCHAR
  (250) NOT NULL,
  PRIMARY KEY
  (id)
);


  INSERT INTO venicle
    (cost,name,engine, color, MPG, mileage, feature_one, feature_two, feature_three, feature_four, feature_five, feature_six)
  VALUES
    ('13000', 'Toyota Yaris', '1.5L I-4 Cyl', 'Pulse', '32 mpg City 40 mpg Hwy', '33,886', 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels'),
    ('11239', 'Nissan Sentra', '1.8L I-4 Cyl', 'Fresh Powder', '29 mpg City 37 mpg Hwy', '39886', 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Fully automatic headlights'),
    ('11289', 'Ford Focus', '2.0L I-4 Cyl', 'Ruby', '26 mpg City 36 mpg Hwy', '33199', 'Emergency communication system', 'Heated front seats', 'Remote keyless entry', 'Parking sensors', 'Heated steering wheel', 'Perimeter approach lights'),
    ('11369', 'Nissan Sentra', '1.8L I-4 Cyl', 'White', '29 mpg City 37 mpg Hwy', 39886, 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Fully automatic headlights'),
    ('11889', 'Hyundai Accent', '1.6L I-4 Cyl', 'Pearl', '28 mpg City 38 mpg Hwy', 32586, 'Wireless phone connectivity', 'Security system', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels'),
    ('13567', 'Kia Rio S', '1.6L I-4 Cyl', 'Silver', '28 mpg City 37 mpg Hwy', 10515, 'Emergency communication system', 'Parking sensors', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Wireless phone connectivity'),
    ('12449', 'Chevrolet Cruze', '1.4L I-4 Cyl', 'Black', '29 mpg City 40 mpg Hwy', 14162, 'Exterior parking camera rear', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Security system', 'Remote keyless entry', 'Alloy wheels'),
    ('14000', 'Kia Soul', '2.0L I-4 Cyl', 'Shadow', '25 mpg City 30 mpg Hwy', 39886, 'Automatic temperature control', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Rearwindow wiper'),
    ('12569', 'Ford Focus', '2.0L I-4 Cyl', 'Charcoal', '26 mpg City 36 mpg Hwy', 35286, 'Parking sensors', 'Front dual zone A/C', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Emergency communication system'),
    ('12609', 'Kia Forte', '2.0L I-4 Cyl', 'Red', '29 mpg City 38 mpg Hwy', 22389, 'Wireless phone connectivity', 'Split folding rear seat', 'Steering wheel mounted audio controls', 'Exterior parking camera rear', 'Remote keyless entry', 'Alloy wheels')


-- { "id": 1,
--   "cost": '13000',
--   "name": 'Toyota Yaris',
--   "engine": '1.5L I-4 Cyl',
--   "color": 'Pulse',
--   "MPG": '32 mpg City 40 mpg Hwy',
--   "mileage": '33,886',
--   "feature_one": 'Wireless phone connectivity',
--   "feature_two": 'Split folding rear seat',
--   "feature_three": 'Steering wheel mounted audio controls',
--   "feature_four": 'Exterior parking camera rear',
--   "feature_five": 'Remote keyless entry',
--   "feature_six": 'Alloy wheels' }
