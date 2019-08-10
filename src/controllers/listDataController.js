// controller for listing items from json file
const mongoose = require('mongoose');

const listDataController = getData => (req, res, next) => {
    const data = getData();
        data
        .find()
        .exec()
        .then(data => {
            res
            .json({
                type: 'Reading Data.',
                data: data
            })
            .status(200)
        })
        .catch(err => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        })

}

module.exports = listDataController;