# *# EchoPark Car Details*
A micro service, supporting a scalable car buying app. 

## Built With
- React > front-end 
- Node > for backened software
- express > server 
- mongoDB > database 
- knex > connection
- Docker > Deployment 
- AWS > deployment 

## Getting Started
- Ensure that you have node installed
- Create a postgres database called cars
- run npm i from the terminal 
- seed database by running terminal command: knex seed:run --env development
- start redis-cahche byb running terminal command: redis-server
- run npm start from command line

## Prerequisites
- (node & NPM )[https://www.npmjs.com/get-npm]
- (postgres)[azure.microsoft.com/Services/PostgreSQL]

## Deployment
### from Docker Hub:
- Launch an AWS ec2 [https://docs.aws.amazon.com/quickstarts/latest/vmlaunch/step-1-launch-instance.html]
- instal node, npm, postgres
- pull image from docker hub [https://hub.docker.com/repository/docker/tillaine/landing_new]
- Build Container: 
  - - ensure that port 80 is avilble on your machine
  - - if useing AWS ensure that security groups allow for traffic
  - - docker run -d -p 80:3004 --name appContainer --rm [tillaine/landing_new || image id]
- connect to app
  - - navigate to your ec2 instance using your public DSN provided by AWS
  - - or localhost on your local machine 

  ### scaling 
  - create a load balancer using AWS [https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-getting-started.html]
  - create a private an image from your first EC2 to add to the load balancer 
  [https://docs.aws.amazon.com/toolkit-for-visual-studio/latest/user-guide/tkv-create-ami-from-instance.html]
  - create and run docker containers 



*# CRUD:*
Add Details: POST, take an object with  cost, name, engine, color, MPG, mileage, feature_one, feature_two, feature_three, feature_four, feature_five, feature_six. 
Get Details: GET, retrieves details of one car.  a call to the root will initiate this request. 
Update: PUT ,  takes an object with name of detail to change and the updated value ex: {cost: 15000,  color: red}
Delete Vehicle : DELETE  takes in an id parameter

*# Project Name*

> Landing Page

*## Related Projects*

  - https://github.com/FEC-ghrden02/similar-vehicles
  - https://github.com/FEC-ghrden02/details-specifications
  - https://github.com/FEC-ghrden02/car-carousel
  - https://github.com/FEC-ghrden02/cost-calculator

*## Table of Contents*

1. [Usage](_#Usage_)
1. [Requirements](_#requirements_)
1. [Development](_#development_)

*## Usage*

> Some usage instructions

*## Requirements*

An `nvmrc` file is included if using [nvm](_https://github.com/creationix/nvm_).

- Node 6.13.0
- etc

*## Development*

*### Installing Dependencies*

From within the root directory:

```sh
npm install -g webpack
npm install
npm i jest
npm i enzyme
``` 


# API: 
Add Details: POST, take an object with  cost, name, engine, color, MPG, mileage, feature_one, feature_two, feature_three, feature_four, feature_five, feature_six. 
Get Details: GET, retrieves details of one car.  a call to the root will initiate this request. 
Update: PUT ,  takes an object with name of detail to change and the updated value ex: {cost: 15000,  color: red}
Delete Vehicle : DELETE  takes in an id parameter

# Project Name

> Landing Page

## Related Projects

  - https://github.com/FEC-ghrden02/similar-vehicles
  - https://github.com/FEC-ghrden02/details-specifications
  - https://github.com/FEC-ghrden02/car-carousel
  - https://github.com/FEC-ghrden02/cost-calculator

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm i jest
npm i enzyme
``` 