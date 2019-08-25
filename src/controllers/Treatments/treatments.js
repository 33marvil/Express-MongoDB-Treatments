const mongoose = require('mongoose');

const Treatment = require('../../models/Treatment');
const Appointment = require('../../models/Appointment');
const User = require('../../models/User');
console.log(User)

// 1 Create appointment for get "id" 
const appointmentControl = (user, time, treatmentId) => {
    const newAppointment = new Appointment({
        _id: mongoose.Types.ObjectId(),
        name: user.name,
        phoneNumber: user.phoneNumber,
        day: time,
        user: user.id,
        treatment: treatmentId
    });
    // console.log(newAppointment);
    newAppointment
    .save()
    // console.log(newAppointment.id);
    return newAppointment.id
};

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
            .then(user => {
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
                // Identificar que sé ha save the new  Treatment        
                    .save((err, treatmentSave) => {                          
                      if (err) throw err;       
                      console.log(treatmentSave);
                      // get the time of the listOfTreatment en console
                      treatmentSave.listOfTreatments.forEach((time) => {
                        // console.log(time);
                        // 2 Add list of appointment the id of appointment create                    
                        // console.log(appointmentControl(user, time, treatmentSave.id));
                        // 3 Get Appointment Id for list Of Appointment
                        // console.log(appointmentId);                                                              
                          treatmentSave.appointments.push(appointmentControl(user, time, treatmentSave.id))
                        });
                        console.log(treatmentSave);
                        treatmentSave
                        // Save treatmentSave and response and catch
                        // return treatmentSave                        
                            .save()                            
                            .then(data => {
                                res
                                    .json({
                                        type: 'Treatment created',
                                        data: data
                                    })
                                    .status(200)
                            })
                            .catch(err => {
                                console.log(`caugth error: ${err}`);
                                return res.status(500).json(err);
                        })   
                  })
            })
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })       
        },
        // GET ALL treatments by userId. app.get('/users/:id/treatments', Treatments.find);
        find: (req, res) => {
            // console.log(req.params);
            Treatment
                .find({ user: req.params.id })
                .exec()
                .then(data => {
                    res
                        .json({
                            type: 'Treatments Found.',
                            data: data
                        })
                        .status(200)
                })
                .catch(err => {
                    console.log(`caugth error: ${err}`);
                    return res.status(500).json(err);
                })                 
        },
        // --//** app.put('/treatments/:id', Treatments.update);
        update: (req, res) => {
            // console.log(req.params);
            const treatmentId = req.params.id;
            const userId = req.body.user;

            User
                .findById(userId)                                
                .then(user => {  
                // 1 Validate User
                    if (user === null) return res.status(500).json({type: "User Null - error."})        
                        // console.log(user);
                        // user
                        // 2 Found Treatment
                        // console.log(treatmentId);
                    Treatment
                        .findOne({ _id: treatmentId, user: user.id }) // query mongoose “Find” with multiple conditions                           
                        .then(treatment => {
                            res
                                .json({
                                    type: "Treatment found",
                                    data: treatment
                                })
                                .status(200)
                        })
                        .catch(err => {
                            console.log(`caugth error: ${err}`);
                            return res.status(500).json(err);
                        })
                            
                    // res
                    //     .json({
                    //       type: "User Found.",
                    //       data: user
                    //     })
                    //     .status(200)
            })                
            .catch(err => {
                console.log(`caugth error: ${err}`);
                return res.status(500).json(err);
            })

                
                // 3 Modify listOfTreatments / appointments

                // 4 Save Treatment for updating

        }
}

module.exports = controller;