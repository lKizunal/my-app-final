const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
    Service.find()
    .then(services => res.json(services))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const servicename = req.body.servicename;
    const servicedescription = req.body.servicedescription;

    
    const newService = new Service({
        servicename,
        servicedescription
    });

    newService.save()
    .then(() => res.json('Service Item Added!'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req,res) => {
    newService.findById(req.params.id)
    .then(services => res.json(services))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Service.findByIdAndDelete(req.params.id)
    .then(() => res.json('Service Item deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Service.findById(req.params.id)
    .then(services => {
    services.servicename = req.body.servicename;
    services.servicedescription = req.body.servicedescription;

    services.save()
    .then(() => res.json('Information updated.'))
    .catch(err => res.status(400).json('Error: '+ err));
})
.catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
