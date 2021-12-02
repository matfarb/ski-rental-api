const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    dateRented: Date,
    returnDate: Date,
    equipment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipment'}],
    isReturned: Boolean
});

module.exports = mongoose.model('Rental', rentalSchema);