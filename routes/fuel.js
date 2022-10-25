// const express = require('express');
// const Fuel = require('../models/owner');
// const app = express();
// const router = express.Router();
// app.use(express.json());


// router.post('/post',async function(req, res){
//     // try{
//     //     const fuel = await Fuel.create(
//     //         {
//     //             fuelType:req.body.fuelType,
//     //             arrival:req.body.arrival,
//     //             finished:req.body.finished,
//     //             volume:req.body.volume
//     //         }
//     //     );

//     //     if(!fuel){
//     //         return res.status(400).json({
//     //             success:false,
//     //             msg:'Something went wrong'
//     //         });
//     //     }
//     //     res.status(200).json({
//     //         success:true,
//     //         fuel:fuel,
//     //         msg:'Successfully created'
//     //     });

//     // }catch(error){
//     //     console.log(error);

//     // }
//     const fuel = new Fuel({
//         fuelType:req.body.fuelType,
//         arrival:req.body.arrival,
//         finished:req.body.finished,
//         volume:req.body.volume
//     });

//     try{
//         await fuel.save();
//         res.status(200).json({
//             "success":true,
//             "message":"Fuel details saved"
//         });
//     }catch(err){
//         res.status(400).json({
//             "success":false,
//             "message":"Error in saving fuel details"
//         });
//     }

// });

// module.exports = router;