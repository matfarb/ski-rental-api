const Rental = require('../models/Rental');

function index(req, res) {
    Rental.find({}, function(err, rentals){
        res.json(rentals);
    });
}

async function create(req, res){
    const rental = new Rental({
        equipment: [req.body.equpiment],
        dateRented: req.body.dateRented,
        returnDate: req.body.returnDate,
        isReturned: False
    });
    await rental.save()
    await User.findOneAndUpdate({id:req.params.id}, {$push:{'rentals': rental}})
    user = await User.findById(req.params.id).populate('rentals');
    res.json(user)
}

module.exports = {
    index,
    create
}