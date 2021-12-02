const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const skisSchema = new Schema({
    brand: {
        type: String,
        enum: ['K2', 'Salomon', 'Volkl'],
        default: 'K2'
    },
    length: {
        type: Number,
        min: 115,
        max: 200
    }
});

const polesSchema = new Schema({
    brand: {
        type: String,
        enum: ['K2', 'Salomon', 'Volkl'],
        default: 'K2'
    },
    length: {
        type: Number,
        min: 95,
        max: 140
    }
});

const helmetSchema = new Schema({
    brand: {
        type: String,
        enum: ['Smith', 'Salomon', 'Oakley'],
        default: 'Smith'
    },
    size: {
        type: Number,
        min: 52,
        max: 63
    }
});

const bootsSchema = new Schema({
    brand: {
        type: String,
        enum: ['Nordica', 'Salomon', 'Lange'],
        default: 'Nordica'
    },
    size: {
        type: Number,
        min: 21,
        max: 32
    }
});

const equipmentSchema = new Schema({

    skis: [skisSchema],
    poles: [polesSchema],
    helmet: [helmetSchema],
    boots: [bootsSchema],

}, {
    timestamps: true
});

module.exports = {
    modelName: mongoose.model('Equipment', equipmentSchema),
    modelName: mongoose.model('Skis', skisSchema),
    modelName: mongoose.model('Poles', polesSchema),
    modelName: mongoose.model('Helmet', helmetSchema),
    modelName: mongoose.model('Boots', bootsSchema),
}