import { Request, Response } from 'express'
import { ReviewServices } from '../services/review.service'

const getAllReviews = async (req: Request, res: Response) => {
  try {
    const result = await ReviewServices.getAllReviews()
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched reviews',
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
const getSingleReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log('id', id)

    const result = await ReviewServices.getSingleReview(id)
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched review',
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

const createReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    const result = await ReviewServices.createReview(reviewData)
    res.status(201).json({
      status: 'success',
      message: 'Successfully added review',
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

const updateReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body
    const { id } = req.params
    const result = await ReviewServices.updateReview(id, reviewData)
    res.status(200).json({
      status: 'success',
      message: 'Successfully updated review',
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

const deleteReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await ReviewServices.deleteReview(id)
    res.status(200).json({
      status: 'success',
      message: 'Successfully deleted review',
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

export const reviewController = {
  createReview,
  getAllReviews,
  updateReview,
  getSingleReview,
  deleteReview,
}
