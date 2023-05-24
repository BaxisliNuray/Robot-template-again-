const express = require('express')
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
dotenv.config();

// SCHEMA

DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
    .then(() => console.log("Mongo DB Connected!"));

const RobotSchema = new mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    img: String
})

const RobotModel = mongoose.model('RobotModel', RobotSchema)

//get all
app.get('/api/robots', async (req, res) => {
    const Robots = await RobotModel.find()
    res.status(201).send(Robots);

})

//get by id
app.get('/api/robots/:id', async (req, res) => {
    const id = req.params.id
    const Robots = await RobotModel.findById(id)
    if (!Robots) {
        res.status(404).send("robot not found")
    }
    else {
        res.status(200).send(Robots)
    }
})



// post robots
app.post('/api/robots', async (req, res) => {
    const { name, desc, price, img } = req.body
    const newRobot = new RobotModel({
        name: name,
        desc: desc,
        price: price,
        img: img
    })
    await newRobot.save()
    res.status(201).send("created");

})

//put
app.put('/api/robots/:id', async (req, res) => {
    const id = req.params.id
    const { name, desc, price, img } = req.body
    const existedRobot = await RobotModel.findByIdAndUpdate(id, {
        name: name,
        desc: desc,
        price: price,
        img: img
    })
    if (existedRobot === undefined) {
        res.status(404).send("robot not found!");
    }
    else {
        res.status(200).send(`${name} updated `);
    }
})

//delete
app.delete('/api/robots/:id',async(req,res)=>{
    const id=req.params.id
    const deletedRobot=await RobotModel.findByIdAndDelete(id)
    if (deletedRobot === undefined) {
        res.status(404).send("robot not found");
      } else {
        res.status(203).send(deletedRobot);    
      }
})


PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})