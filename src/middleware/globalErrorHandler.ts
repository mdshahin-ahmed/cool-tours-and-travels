/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { TErrorResponse } from '../types/TErrorResponse'
import handleValidationError from '../helpers/errorHelpers/handleValidationError'
import handleDuplicateError from '../helpers/errorHelpers/handleDuplicate'
import handleCastError from '../helpers/errorHelpers/handleCastError'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // let statusCode = err.statusCode || 500
  // let message = err.message || 'Something went wrong'
  // let status = err.status || 'error'

  let errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    status: err.status || 'error',
    message: err.message || 'Something went wrong',
    issues: err.issues || [],
  }

  if (err instanceof mongoose.Error.ValidationError) {
    errorResponse = handleValidationError(err)
  } else if (err.code && err.code === 11000) {
    errorResponse = handleDuplicateError(err)
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err)
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
