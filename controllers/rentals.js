const User = require('../models/user');
const Rental = require('../models/rental');
const Equipment = require('../models/equipment');
const Skis = require('../models/equipment');
const Poles = require('../models/equipment');
const Boots = require('../models/equipment');
const Helmet = require('../models/equipment');
const jwt = require('jsonwebtoken');
const atob = require('atob')



async function create(req, res){
    console.log(req.body.equipment)
    const rental = new Rental({
        equipment: req.body.equipment,
        dateRented: req.body.dateRented,
        returnDate: req.body.returnDate,
        isReturned: false
    });
    
    await rental.save()
    console.log(rental)
    await User.findOneAndUpdate({id:req.params.id}, {$push:{'rentals': rental}})
}

async function deleteRental(req, res){
    const id = req.params.id;
    await Rental.findByIdAndDelete(id)
    console.log('deleted')
}

async function getUserRentals(req, res) {
    let token = req.headers.authorization;
    let decoded = JSON.parse(atob(token.split('.')[1]));
    const userEmail = decoded.user.email;
    const user = await User.findOne({ email: userEmail }).populate('rentals');
    res.json(user.rentals)
}

module.exports = {
    create,
    deleteRental,
    getUserRentals
}