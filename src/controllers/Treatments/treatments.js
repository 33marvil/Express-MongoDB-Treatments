const mongoose = require('mongoose');
const fs = require('fs');

const Treatment = require('../../models/Treatment');
const Appointment = require('../../models/Appointment');
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
        // crear  treatment y lo grabo con los datos que tengo
        User
            .findById(userId)
            .exec()
            .then(User => {
                // console.log(user)     
                // Create Object Treatment           
                  const newTreatment = new Treatment ({
                      _id: mongoose.Types.ObjectId(),
                      description: description,
                      listOfTreatments: listOfTreatments,                     
                      user: userId
                  });
                //   console.log(newTreatment);                                      
                newTreatment
                // Identificar que sea recording the new  Treatment
                    .save((err, treatmentSave) => {                          
                      if (err) throw err;       
                      console.log(treatmentSave);
                      // get the time of the listOfTreatment en console
                      treatmentSave.listOfTreatments.forEach((time) => {
                        console.log(time);
                        // Create appointmnet para obtener su "id" 
                        // 1 Agregar list of appointment the id od appointment create
                      });
                  })



                  // Create the appointment de acuerdo a el número de treatments
                //   .then(treatment => { // promesa de .save()
                //     // res
                //     //   .json({
                //     //     type: 'Treatment created',
                //     //     data: treatment
                //     //   })
                //     //   .status(200)
                //     //   })
                // //   .catch(err => {
                // //     console.log(`caugth error: ${err}`);
                // //     return res.status(500).json(err);
                //   })                  
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })
            
            
        // utilizo propiedad de Treatment -- appointments:  push[id appointment]


        
        
    }

        // Guardar
    
        
}


module.exports = controller;