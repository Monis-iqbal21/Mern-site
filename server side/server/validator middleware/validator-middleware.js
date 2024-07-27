const { Schema } = require("zod");

const validate = (Schema) => async (req, res, next) => {

    try {
        const parseBody = await Schema.parseAsync(req.body)
        req.body = parseBody
        next()

    } catch (err) {
        const status = 422;
        const message = err.errors[0].message
        const extraDetail = "fill the form properly"
        // res.status(400).json({ message: message })

        const error = {
            status, message , extraDetail
        }

        next(error)
    }
}

module.exports = validate