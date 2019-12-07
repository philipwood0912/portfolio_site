# Portfolio Site - Philip Wood

The start of my portfolio site. Will currently be hosted on heroku.com until further notice, and site will further be updated.
 
## Getting Started

Clone the repo to get started!
```
$ git clone https://github.com/philipwood0912/portfolio_site.git
```
### Prerequisites

Node.js installed on computer, along with MAMP/WAMP

### Installing

Import the database from the .sql file in data folder, can be done in command line or in phpMyAdmin.

Inside folder install packages that the application needs to run.

```
$ npm install
```
Single Packages
```
$ npm i -s express
$ npm i -s express-handlebars
$ npm i -s mysql
```

## Deployment

Run application through command line.
```
$ npm start
```
Application will be running on localhost.
```
http://localhost:5000
```

## Built With

* Node.js
* JavaScript
* MYSQL
* Express-Handlebars
* Express
* SASS

## Issues

### Brower compatibility

* Chrome - 100%
* Firefox - 100%
* Safari - 80% : Problems with SVGs
* IE - Unknown at the moment

### Safari

Issues with event listeners and SVGs, have an idea where the problem is and will implement a solution in the near future.

### Contact form

Currently contact form doesn't function, may add nodemailer if time allows it. Php contact form for Pan can be found in Php folder. 

## Authors

* **Philip Wood** 

