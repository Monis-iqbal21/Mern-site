const User = require("../models/user-models")
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("response from controller home");
    } catch (error) {
        res.status(400).send({ msg: "page not found" })
    }

}

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body

        const userexist = await User.findOne({ email: email })


        if (userexist) {
            return res.status(400).json({ msg: "user exist" })
        }
        //encrypting password

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound)
        console.log("Hashed Password:", hash_password);

        const user_created = await User.create({ username, email, phone, password: hash_password })


        res.status(201).json({
            message: user_created,
            token: await user_created.generateToken(),
            userId: user_created._id.toString()

        });

    }
    catch (error) {
        console.log(error)
        // res.status(500).json({ message: "page not found" });
        next(error)
    }

}


//                        Login logic

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const userExistOrNot = await User.findOne({ email });

        if (!userExistOrNot) {
            return res.status(400).json({ message: "invalid Credentials" })
        }

        // const user = await bcrypt.compare(password, userExistOrNot.password);

        const user = await userExistOrNot.comparePassword(password);

        if (user) {
            res.status(200).json({
                message: "login successful",
                token: await userExistOrNot.generateToken(),
                userId: userExistOrNot._id.toString()

            });
        } else {
            res.status(401).json({ message: "invalid email or password" })

        }

    } catch (error) {
        // console.error("Error in login controller:", error);
        // res.status(500).json({ message: "something went wrong on login" });
        const status = 401;
        const message = "password or email invalid"

        const err = {
            status, message
        }
        next(err)
    }
}


module.exports = { home, register, login }