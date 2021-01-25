const router = require('express').Router();
let ServicePurchase = require('../models/servicepurchase.model');

router.route('/').get((req, res) => {
    ServicePurchase.find()
    .then(servicepurchases => res.json(servicepurchases))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const address = req.body.address;
    const otherServices = req.body.otherServices;
    const cellNum = Number(req.body.cellNum);
    const telNum = Number(req.body.telNum);
    
    const newservicePurchase = new ServicePurchase({
        firstname,
        lastname,
        email,
        address,
        otherServices,
        cellNum,
        telNum
    });

    newservicePurchase.save()
    .then(() => res.json('Service Added!'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req,res) => {
    newservicePurchase.findById(req.params.id)
    .then(servicepurchases => res.json(servicepurchases))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    ServicePurchase.findByIdAndDelete(req.params.id)
    .then(() => res.json('Service deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    ServicePurchase.findById(req.params.id)
    .then(servicepurchases => {
    servicepurchases.firstname = req.body.firstname;
    servicepurchases.lastname = req.body.lastname;
    servicepurchases.email = req.body.email;
    servicepurchases.address = req.body.address;
    servicepurchases.otherServices = req.body.otherServices;
    servicepurchases.cellNum = Number(req.body.cellNum);
    servicepurchases.telNum = Number(req.body.telNum);
    
    servicepurchases.save()
    .then(() => res.json('Service Information updated.'))
    .catch(err => res.status(400).json('Error: '+ err));
})
.catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
