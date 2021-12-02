require('./config/rentals');


const Customer = require('./models/customer');
const Rental = require('./models/rental');
const Equipment = require('./models/equipment');
const Skis = require('./models/equipment');
const Poles = require('./models/equipment');
const Helmet = require('./models/equipment');
const Boots = require('./models/equipment');


const users = [
    {firstName: 'Mat', lastName: 'Goldfarb', email: 'mathew30@live.ca', age: '30', phoneNumber: "416-709-0891"}    
]

Customer.deleteMany({})
.then( results => {
    return Customer.create(users);
} )
.then( res => {
    console.log(res.length);
    process.exit();
})
.catch( err => {
    console.log(err);
})