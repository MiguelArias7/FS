import e, { Request, Response } from "express";

/**
 * Handles successful responses by setting the response status,
 * adding a JSON payload with an error message, date, and data,
 * and sending the response.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {string} message - The success message.
 * @param {object} data - The data to be included in the response payload.
 * @param {number} [status=200] - The status code for the response.
 * @return {void}
 */
function successHandler(req: Request, res: Response, message: string, data: object, status = 200) {
  res.status(status).json({
    error: "",
    message: message,
    date: new Date(),
    data,
  });
}

/**
 * Handles errors by logging the error and returning an error response.
 *
 * This function is used to handle errors in a consistent way across the
 * application. It takes the request and response objects as well as the
 * error message and error object. The status code is optional and defaults
 * to 500.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {string} message - The error message.
 * @param {number} [status=500] - The status code for the error response.
 * @param {Error} error - The error object.
 */
function errorHandler(req: Request, res: Response, message: string, status = 500, error: Error) {
  // Return an error response with the status code, error message, and date
  res.status(status).json({
    error: error.message,
    message: message,
    date: new Date(),
  });
}

export { successHandler, errorHandler };
