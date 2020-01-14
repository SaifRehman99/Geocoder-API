const Locations = require('../models/Location');

// @GET /api/locations
exports.getLocations = async(req, res, next) => {
    try {

        const locations = await Locations.find();

        return res.status(200).json({
            success: true,
            count: locations.length,
            data: locations
        })

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            Message: 'Server Error'
        })
    }
};

// @POST /api/locations
exports.addLocation = async(req, res, next) => {
    try {

        const location = await Locations.create(req.body);
        return res.status(200).json({
            success: true,
            data: location
        })


    } catch (error) {
        console.log(error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                Message: 'User of that ID Already exist'
            })

        }


        return res.status(500).json({
            success: false,
            Message: 'Server Error'
        })


    }

}