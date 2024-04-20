import mongoose from "mongoose";
import validator from "validator";

const resBookSchema = new mongoose.Schema({

    firstName : {
        type: String,
        required : true,
        minLength : [3, " first name should contain at least three characters"],
        maxLength : [30, " first name should be between 3 and 30 characters"]
    },
    lastName : {
        type: String,
        required : true,
        minLength : [3, " last name should contain at least three characters"],
        maxLength : [30, " last name should be between 3 and 30 characters"]
    },
    email : {
        type: String,
        required : true,
        validate : [validator.isEmail, " please enter a valid email"]
    },
    phoneNumber : {
        type: String,
        required : true,
        minlength : [10, " phone number should contain at least 10 characters"],
        maxLength : [10, " phone number should contain at least 10 characters"]
    },
    time :
    {
        type : String,
        required : true,
    },
    date :
    {
        type : String,
        required : true,
    }
})

export const Reservations = mongoose.model("Reservations", resBookSchema)

// module.exports.resBookSchema = reservation;