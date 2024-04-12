const express=require('express');
const router=express.Router();
const cors= require('cors');
const {test,registerPlace,}=require('../controllers/authControllers')


// middleware 
router.use(
    cors()
)
router.get('/',test)
router.post('/add-places',registerPlace)
module.exports=router