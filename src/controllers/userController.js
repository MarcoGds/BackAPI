const userSchema = require('../models/userSchema');
const mongoose = require("mongoose")

const getAll = async (req, res) => {
    try{
        const allUsers = await userSchema.find()
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = new userSchema (
        {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        const savedUser = await newUser.save()

        res.status(200).json({
            message: "User created",
            savedUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

module.exports = {
    getAll,
    createUser
}