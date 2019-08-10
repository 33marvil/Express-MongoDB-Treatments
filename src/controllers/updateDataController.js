// controller for update item for id

const mongoose = require('mongoose');

const updateDataController = getData => (req, res, next) => {
    const data = getData();
    data
        .findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
        
        .then(data => {
            res
                .json({
                    type: 'Data found and Update.',
                    data: data
                })
                .status(200)
        })
        .catch(err => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        })

}

module.exports = updateDataController;

