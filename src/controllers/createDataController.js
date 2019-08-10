// Create data for DB

const mongoose = require('mongoose');

const createDataController = getData => (req, res, next) => {
    const data = getData();
    let dynamic = {
        _id: mongoose.Types.ObjectId(),
    }
    const body = req.body;
    console.log(req.body); // return object
    // que properties use ?
    data.schema.eachPath(function (schemaProperty) {
        // console.log(schemaProperty);
        if (schemaProperty in body) {
            console.log(schemaProperty);
            dynamic[schemaProperty] = body[schemaProperty]; // match
        }
    });
    console.log(dynamic);
    // what property of model??
    const newData = new data(dynamic); // obj dynamic 
    // console.log(newData);
    newData
        .save()
        .then(data => {
            res
                .json({
                    type: 'Company created',
                    data: data
                })
                .status(200)
        })
        .catch(err => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        })
}

module.exports = createDataController;