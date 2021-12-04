const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    dateRented: Date,
    returnDate: Date,
    equipment: Array,
    isReturned: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Rental', rentalSchema);