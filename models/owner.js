const mongoose = require('mongoose');

const fuelSchema = new mongoose.Schema({
    fuelType:{
        type:String,
        required:true
    },
    arrival:{
        type:String,
        required:true
    },
    finished:{
        type:String,
        required:true
    },
    volume:{
        type:String,
        required:true
    }
    
},{collection:'fuel'});

module.exports = mongoose.model('Fuel',fuelSchema);

//module.exports = Fuel = mongoose.model('fuel',fuelSchema);