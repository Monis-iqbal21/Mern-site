const Contact = require("../models/contact-model")

const contactForm = async(req , res) =>{
    try {
        const response = req.body;

        await Contact.create(response);

        return res.status(200).json({message :  "message send successfull"})
    } catch (error) {
        req.status(500).json({message :  "message not delivered"})
    }
}

module.exports = contactForm; 