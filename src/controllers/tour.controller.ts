/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { TourServices } from '../services/tour.service'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const getAllTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TourServices.getAllTours()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched tours',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const getSingleTour = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params

    const result = await TourServices.getSingleTour(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched tour',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tourData = req.body
    const result = await TourServices.createTour(tourData)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully added tour',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tourData = req.body
    const { id } = req.params
    const result = await TourServices.updateTour(id, tourData)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully updated tour',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await TourServices.deleteTour(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully deleted tour',
      data: null,
    })
  } catch (error: any) {
    next(error)
  }
}
const getNextSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await TourServices.getNextSchedule(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Nearest schedule fetched successfully',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

export const tourController = {
  createTour,
  getAllTours,
  updateTour,
  getSingleTour,
  deleteTour,
  getNextSchedule,
}
