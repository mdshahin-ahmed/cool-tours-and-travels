/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { ReviewServices } from '../services/review.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const getAllReviews = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await ReviewServices.getAllReviews()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched reviews',
      data: result,
    })
  },
)

const getSingleReview = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await ReviewServices.getSingleReview(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched review',
      data: result,
    })
  },
)

const createReview = catchAsyncFunction(async (req: Request, res: Response) => {
  const reviewData = req.body
  const result = await ReviewServices.createReview(reviewData)
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully added review',
    data: result,
  })
})

const updateReview = catchAsyncFunction(async (req: Request, res: Response) => {
  const reviewData = req.body
  const { id } = req.params
  const result = await ReviewServices.updateReview(id, reviewData)

  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully updated review',
    data: result,
  })
})

const deleteReview = catchAsyncFunction(async (req: Request, res: Response) => {
  const { id } = req.params
  await ReviewServices.deleteReview(id)

  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully deleted review',
    data: null,
  })
})

export const reviewController = {
  createReview,
  getAllReviews,
  updateReview,
  getSingleReview,
  deleteReview,
}
