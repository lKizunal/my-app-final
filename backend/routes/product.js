const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const productname = req.body.productname;
    const productdescription = req.body.productdescription;

    
    const newproduct = new Product({
        productname,
        productdescription
    });

    newproductPurchase.save()
    .then(() => res.json('Product Added!'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req,res) => {
    newproduct.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Product.findById(req.params.id)
    .then(products => {
    products.productname = req.body.productname;
    products.productdescription = req.body.productdescription;

    products.save()
    .then(() => res.json('Information updated.'))
    .catch(err => res.status(400).json('Error: '+ err));
})
.catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
