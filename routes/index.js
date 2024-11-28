const express = require('express') //used to create router, imports express
const router = express.Router() //figures out what code to run in response to a request
//typically based on the URL and the method, GET, POST etc

//homepage routing for BMI calculator
router.get('/', function(req, res, next){
    res.render('body-mass-index')
})

//routes the /return-BMI page
router.post('/return-BMI', function(req,res,next){
    const formData = req.body
    console.log(formData)

    //if a data error exists, the user is redirected to /calc-error and told to renter data
    if(formData.weight.length == 0 || formData.height.length == 0 || formData.weight <= 0 || formData.height<=0
        || isNaN(formData.weight) || isNaN(formData.height)
    ){
        res.render('/calc-error',{
            errorScript:'You entered invalid data, only positve numbers are accepted.'
        })
    }
    // if no error data and BMI is displayed
    res.render('calculation-return', {
        weight:formData.weight,
        height:formData.height,
        bmi:Math.round(formData.weight/(formData.height * formData.height)),
    })
    
})

module.exports = router //this line needs to be the last line (anyting after will be ignored)