const { model } = require("mongoose");
const z = require("zod")


const signupSchema = z.object({

    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "name must be atleast of 3 charactars" })
        .max(30, { message: "name can not be more than 30 charactars" }),

    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "invalid email" })
        .min(3, { message: "email must be atleast of 3 charactars" })
        .max(30, { message: "email can not be more than 30 charactars" }),


    phone: z
        .string({ required_error: "phone no is required" })
        .trim()
        .min(3, { message: "phone must be atleast of 3 charactars" })
        .max(30, { message: "phone can not be more than 30 charactars" }),

    password: z
        .string({ required_error: "password is required" })
        .min(8, { message: "password must be atleast of 8 charactars" })
        .max(1030, { message: "password can not be more than 30 charactars" })
});

const loginSchema = () => z.object({

    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "invalid email" })
        .min(3, { message: "email must be atleast of 3 charactars" })
        .max(30, { message: "email can not be more than 30 charactars" }),


    password: z
        .string({ required_error: "password is required" })
        .min(8, { message: "password must be atleast of 8 charactars" })
        .max(1030, { message: "password can not be more than 30 charactars" })
})


module.exports = {signupSchema ,loginSchema};