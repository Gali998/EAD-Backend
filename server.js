const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();
const Fuel = require('./models/owner');

app.use(express.json());

dotenv.config({
    path:'./config/config.env'

});

//connecting to DB
connectDB();


//crud operations
//get all fuel 
app.get('/',async function(req,res){
    const fuel = await Fuel.find().exec();
    res.status(200).json(fuel);
});

//post fuel data
app.post('/post',async function(req,res){
    const fuel = new Fuel({
        fuelType:req.body.fuelType,
        arrival:req.body.arrival,
        finished:req.body.finished,
        volume:req.body.volume
    });

    try{
        await fuel.save();
        res.status(200).json({
            "success":true,
            "message":"Fuel details saved"
        });
    }catch(err){
        res.status(400).json({
            "success":false,
            "message":"Error in saving fuel details"
        });
    }

});

//put fuel data
app.put('/update/:id',async function(req, res) {
    // _id = req.params.id;
    // const {fuelType,arrival,finished,volume} = req.body;

    // const updateFuel = {
    //     fuelType,
    //     arrival,
    //     finished,
    //     volume
    // }
    // const update = await Fuel.findByIdAndUpdate(_id,updateFuel)
    // .then(()=>{
    //     res.status(200).send({status:"Fuel updated",user:update});
    // }).catch((err)=>{
    //     console.log(err);
    //     res.status(500).send({status:"Fuel not updated",error:err.message});
    // })
    Fuel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            fuelType:req.body.fuelType,
            arrival:req.body.arrival,
            finished:req.body.finished,
            volume:req.body.volume
          },
        },
        { new: true },
        (err, Fuel) => {
          if (err) {
            res.send(err);
          } else res.json(Fuel);
        }
      );
});

const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(`Server running on port : ${PORT}`)
    );
