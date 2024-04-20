class errorHandler extends Error {

    constructor(message,statusCode)
    {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errController = (err, req, res, next) =>    

{
    err.message = err.message || "Something went wrong ";
    err.statusCode = err.statusCode || 500;
    return res.status(err.statusCode).json({
        success : false,
        message : err.message,
    });

}

export default errorHandler;