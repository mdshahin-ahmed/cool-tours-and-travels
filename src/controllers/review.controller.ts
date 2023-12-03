/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { ReviewServices } from '../services/review.service'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ReviewServices.getAllReviews()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched reviews',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const getSingleReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params

    const result = await ReviewServices.getSingleReview(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched review',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviewData = req.body
    const result = await ReviewServices.createReview(reviewData)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully added review',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reviewData = req.body
    const { id } = req.params
    const result = await ReviewServices.updateReview(id, reviewData)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully updated review',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    await ReviewServices.deleteReview(id)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully deleted review',
      data: null,
    })
  } catch (error: any) {
    next(error)
  }
}

export const reviewController = {
  createReview,
  getAllReviews,
  updateReview,
  getSingleReview,
  deleteReview,
}
