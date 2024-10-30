const ListingAndRevewsController = require("../Models/listingsAndReviews");
const { body, validationResult } = require('express-validator');


const getListings = async (req, res) => {

    try {
        console.time('queryExecutionTime'); // Start measuring time

        //const listing = await ListingAndRevewsController.findOne().select('name summary space');
        const listing = await ListingAndRevewsController.findOne();
        //const listing = await ListingAndRevewsController.find().select('name summary space');
        //const listing = await ListingAndRevewsController.findOne().select('name summary space');

        console.timeEnd('queryExecutionTime'); // Stop measuring time and log the result
        res.json(listing)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    // res.end();
}
const getAggs = async (req, res) => {

    try {
        console.time('queryExecutionTime'); // Start measuring time
        const aggo = await ListingAndRevewsController.aggregate([
            {
                '$match': {
                    'maximum_nights': '30'
                }
            }, {
                '$group': {
                    '_id': {
                        'bedroom': '$bathrooms'
                    },
                    'total': {
                        '$sum': '$beds'
                    },
                    'name': {
                        '$first': '$name'
                    },
                    'summary': {
                        '$first': '$summary'
                    },
                    'description': {
                        '$first': '$description'
                    }
                }
            }, {
                '$sort': {
                    'total': -1
                }
            }]);


        console.timeEnd('queryExecutionTime'); // Stop measuring time and log the result
        res.json(aggo)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    // res.end();
}
module.exports = { getListings, getAggs };
