// Represents the API response object
export const ApiResponse  = (res, statusCode, message, data, errors) => {
    return res.status(statusCode).json(
        {
            success: statusCode < 400,
            message: message,
            data: data,
            errors: errors
        }
    )
}