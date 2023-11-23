import { Request, Response } from 'express'
import { TourServices } from '../services/tour.service'

const getAllTours = async (req: Request, res: Response) => {
  try {
    const result = await TourServices.getAllTours()
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched tours',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log('id', id)

    const result = await TourServices.getSingleTour(id)
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched tour',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const result = await TourServices.createTour(tourData)
    res.status(201).json({
      status: 'success',
      message: 'Successfully added tour',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const updateTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body
    const { id } = req.params
    const result = await TourServices.updateTour(id, tourData)
    res.status(200).json({
      status: 'success',
      message: 'Successfully updated tour',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const deleteTour = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await TourServices.deleteTour(id)
    res.status(200).json({
      status: 'success',
      message: 'Successfully deleted tour',
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const getNextSchedule = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log(id)

    const result = await TourServices.getNextSchedule(id)
    res.status(200).json({
      status: 'success',
      message: 'Nearest schedule fetched successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
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
