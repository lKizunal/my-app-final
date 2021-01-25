const router = require('express').Router();
let ProductPurchase = require('../models/productpurchase.model');

router.route('/').get((req, res) => {
    ProductPurchase.find()
    .then(productpurchases => res.json(productpurchases))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const address = req.body.address;
    const cellNum = Number(req.body.cellNum);
    
    const newproductPurchase = new ProductPurchase({
        firstname,
        lastname,
        email,
        address,
        cellNum,
    });

    newproductPurchase.save()
    .then(() => res.json('Information Added!'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req,res) => {
    newproductPurchase.findById(req.params.id)
    .then(productpurchases => res.json(productpurchases))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    ProductPurchase.findByIdAndDelete(req.params.id)
    .then(() => res.json('Information deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    ProductPurchase.findById(req.params.id)
    .then(productpurchases => {
    productpurchases.firstname = req.body.firstname;
    productpurchases.lastname = req.body.lastname;
    productpurchases.email = req.body.email;
    productpurchases.address = req.body.address;
    productpurchases.cellNum = Number(req.body.cellNum);
    productpurchases.telNum = Number(req.body.telNum);
    
    productpurchases.save()
    .then(() => res.json('Information updated.'))
    .catch(err => res.status(400).json('Error: '+ err));
})
.catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
