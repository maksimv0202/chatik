import { Response, Request } from "express";
import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from "routing-controllers";

@Middleware({ type: "after" })
export class ErrorHandler implements ExpressErrorMiddlewareInterface {
  /**
   * Formatted ErrorHandler middleware. Response Error Format: 
   * {
   *  "code": "500",
   *  "message": "Internal Server Error",
   *  "data": []
   * }
   */
  error(error: HttpError, request: Request, response: Response) {
    const statusCode = error.httpCode || 500;
    const message = error.message || "Internal Server Error";

    response.status(statusCode).json({
      code: statusCode,
      message: message,
      data: [],
    });
  }
}