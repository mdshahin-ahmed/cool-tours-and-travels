/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { TErrorResponse } from '../types/TErrorResponse'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // let statusCode = err.statusCode || 500
  // let message = err.message || 'Something went wrong'
  // let status = err.status || 'error'

  const errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    status: err.status || 'error',
    message: err.message || 'Something went wrong',
    issues: err.issues || [],
  }

  if (err instanceof mongoose.Error.ValidationError) {
    errorResponse.statusCode = 400
    errorResponse.message = 'Validation Error!'
    errorResponse.status = 'error'

    const errorValues = Object.values(err.errors)
    errorValues.forEach((errObj) => {
      errorResponse.issues.push({
        path: errObj.path,
        message: errObj.message,
      })
    })
  }

  res.status(errorResponse.statusCode).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
  })
}

export default globalErrorHandler

/*
# Error Pattern
statusCode
status
message
issues
*/
