const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const locationSchema = new mongoose.Schema({
    locationID: {
        type: String,
        required: [true, 'Please add ID first'],
        trim: true,
        unique: true,
        maxlength: [10, 'Please Length must be less than 10']
    },

    address: {
        type: String,
        required: [true, 'Please add Address']
    },

    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },

        locationAddress: String

    },


    createdAt: {
        type: Date,
        default: Date.now
    }
})


// mongoose middleware to change the address to geoJSON
locationSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].latitude, loc[0].longitude],
        locationAddress: loc[0].formattedAddress
    }


    // clearing the address field here
    this.address = undefined;
})



module.exports = mongoose.model('Location', locationSchema)