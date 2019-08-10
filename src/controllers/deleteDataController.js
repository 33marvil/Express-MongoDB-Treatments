const fs = require('fs');

const mongoose = require('mongoose');


const deleteDataController = getData => (req, res, next) => {
    const data = getData();
    data
        .findByIdAndRemove(req.params.id)
        .then(data => {
            res
                .json({
                    type: 'Data Remove',
                    data: data
                })
                .status(200)
        })
        .catch(err => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        })

};

    
module.exports = deleteDataController;