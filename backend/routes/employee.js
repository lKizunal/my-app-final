const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
    Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const feedback = req.body.feedback;
    
    const newEmployee = new Employee({
        firstname,
        lastname,
        feedback,
    });

    newEmployee.save()
    .then(() => res.json('Employee Added!'))
    .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req,res) => {
    newEmployee.findById(req.params.id)
    .then(employees => res.json(employees))
    .catch(err=> res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Employee.findByIdAndDelete(req.params.id)
    .then(() => res.json('Employee deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    Employee.findById(req.params.id)
    .then(employees => {
    employees.firstname = req.body.firstname;
    employees.lastname = req.body.lastname;
    employees.feedback = req.body.feedback;
    
    employees.save()
    .then(() => res.json('Employee updated.'))
    .catch(err => res.status(400).json('Error: '+ err));
})
.catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;
