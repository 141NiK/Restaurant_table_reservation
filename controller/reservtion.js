import errorHandler from "../error/error.js";
import { Reservations } from "../models/resBookingSchema.js";

export const sendReservation = async ( req , res , next) => 
{
    const { firstName , lastName , email , phoneNumber , date , time} = req.body ;
    if( !firstName || !lastName || ! email || ! phoneNumber || !time || !date )

    {
        return next ( new errorHandler ("please enter valid details", 400) );

    }

    try {
        await Reservations.create({ firstName, lastName, email, phoneNumber, time, date});
        res.status(200).json (
                {
                    success : true,
                    message : "Reservation sent successfully"

                });
            }
            catch(error)
            {
                if ( error.name == "ValidationError")
                {
                    const validationErrors = Object.values(error.errors).map(
                        (err) => err.message
                    );
                    return next (new errorHandler(validationErrors.join(' , '), 400) );
                    }
                    return next(error);
            }
        };