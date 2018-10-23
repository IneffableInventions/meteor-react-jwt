# How to use jsonwebtoken with a Meteor app?

This is a simple example of how to use json web tokens with a Meteor and React JS.

## Required technologies
- Node JS -> https://nodejs.org/es/
- Meteor -> https://www.meteor.com/install

## Steps

1) Create a new Meteor app with the command "meteor create {your-app-name}".

2) Add the following dependencies to your project:
  - react
  - react-dom
  - react-router-dom

3) Create forms for log in and sign up. Using the Meteor structure, they should be inside "public/ui/". We recommend you to create 4 components:
  - Login
  - SignUp
  - Home
  - Navbar
  
4) Add the following dependencies:
  - cryptr
  - jsonwebtoken
 
5) Create a folder inside "public" named "api" and add a file named "users.js". 
* Complete info

6) Generate two differents SHA256 using this web generator https://passwordsgenerator.net/sha256-hash-generator/ or any other method from your preference. Use different and complex words for making this. Assign the result two to different enviroment variables:

SET CODE_CRYPTR={YOUR_SECRET_1}
SET CODE_TOKEN={YOUR_SECRET_2}

Remember not to share this values with anybody.

You can run your meteor app using this command:

SET CODE_CRYPTR={YOUR_SECRET_1} && SET CODE_TOKEN={YOUR_SECRET_2} && meteor





