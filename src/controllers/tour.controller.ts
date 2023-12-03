/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { TourServices } from '../services/tour.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const getAllTours = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await TourServices.getAllTours()
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully fetched tours',
    data: result,
  })
})

const getSingleTour = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await TourServices.getSingleTour(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched tour',
      data: result,
    })
  },
)

const createTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const tourData = req.body
  const result = await TourServices.createTour(tourData)

  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully added tour',
    data: result,
  })
})

const updateTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const tourData = req.body
  const { id } = req.params
  const result = await TourServices.updateTour(id, tourData)

  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully updated tour',
    data: result,
  })
})

const deleteTour = catchAsyncFunction(async (req: Request, res: Response) => {
  const { id } = req.params
  await TourServices.deleteTour(id)
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully deleted tour',
    data: null,
  })
})
const getNextSchedule = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params
    const result = await TourServices.getNextSchedule(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Nearest schedule fetched successfully',
      data: result,
    })
  },
)

export const tourController = {
  createTour,
  getAllTours,
  updateTour,
  getSingleTour,
  deleteTour,
  getNextSchedule,
}
