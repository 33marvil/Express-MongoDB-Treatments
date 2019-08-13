const mongoose = require('mongoose');
const Treatment = require('../../models/Treatment');

const controller = {
        create: (req, res) => {
        // Recibir del body 1a parte
            
        const description = req.body.description;
            console.log(description);
        const listOfTreatments = req.body.listOfTreatments.split(",");
            console.log(listOfTreatments);
        const user = req.body.user;
            console.log(user);
        
    
        // newTreatment = {
        //     _id: mongoose.Schema.Types.ObjectId,
        //     description: { type: String },
            // listOfTreatmen
        //     appointments: {
        //         name: { type: String },
        //         phoneNumber: { type: Number },
        //         day: { type: String }
        //     }
        // };
        // list.pop(list);
        // console.log(newTreatment);
        // list.push(newTreatment);
        
        // newTreatment
        //     .save()
        //     .then(data => {
        //         res
        //             .json({
        //                 type: 'Treatment created',
        //                 data: data
        //             })
        //             .status(200)
        //     })
        //     .catch(err => {
        //         console.log(`caugth error: ${err}`);
        //         return res.status(500).json(err);
        //     })
    }
}


module.exports = controller;