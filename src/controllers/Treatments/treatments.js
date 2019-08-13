const mongoose = require('mongoose');
const Treatment = require('../../models/Treatment');

const User = require('../../models/User');
console.log(User)

const controller = {
        create: (req, res) => {
        // Receive body data 1a parte
        const description = req.body.description;
            // console.log(description);
        const listOfTreatments = req.body.listOfTreatments.split(",");
            // console.log(listOfTreatments);
        const userId = req.body.user;
            // console.log(user);
        // existe el usuario que recivo del body?
        // si existe el usuario
        User
            .findById(userId)
            .exec()
            .then(user => {
                console.log(user)
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
            
        // crear  treatment y lo grabo con los datos que tengo
        // utilizo propiedad de Treatment -- appointments:  push[id appointment]


        // Formar el Objeto Treatment
        
    }

        // Guardar
    
        
}


module.exports = controller;