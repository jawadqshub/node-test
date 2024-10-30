const getUserFromModel = require("../DAOs/userDAO");
const UserModel = require("../Models/users");
const { body, validationResult } = require('express-validator');
const getUserFromService = require("../Services/userService");



const getUser = async (req, res) => {
    console.log("request Received");
    try {
        // const user = await UserModel.find()
        const user = await getUserFromService();
        res.send(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    res.end();
}

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields required" });
        }
        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = new UserModel({
            name: name,
            password: password,
            email: email,
        });
        const savedUser = await user.save()

        res.json(savedUser)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


    //     console.log("request called");
    //     const user = new UserModel({
    //         name: name,
    //         email: email,
    //         password: password
    //     });

    //     try {
    //         const newUser = await user.save();
    //         res.status(201).json(newUser); // 201 Created status
    //     } catch (error) {
    //         res.status(500).json({ error: "Failed to create user" });
    //     }
}


// const createUser = (req, res) => {
//     const { name, phone } = req.body;
//     if (!name || !phone) {
//         res.status(400);
//         throw new Error("All fields required");
//     }
//     const user = req.body;
//     const newUser = new UserModel(user);
//     await newUser.save();
//     res.status(200).json(user);
// }

module.exports = { getUser, createUser };