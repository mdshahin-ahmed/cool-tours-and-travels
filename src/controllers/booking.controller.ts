/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'
import { BookingServices } from '../services/booking.service'

const getAllBookings = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const result = await BookingServices.getAllBookings()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched Bookings',
      data: result,
    })
  },
)

const getSingleBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await BookingServices.getSingleBooking(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched Booking',
      data: result,
    })
  },
)

const createBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const BookingData = req.body
    const result = await BookingServices.createBooking(BookingData)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully added Booking',
      data: result,
    })
  },
)

const updateBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const BookingData = req.body
    const { id } = req.params
    const result = await BookingServices.updateBooking(id, BookingData)

    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully updated Booking',
      data: result,
    })
  },
)

const getAllBookingOfUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params
    await BookingServices.getAllBookingOfUser(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched all Booking',
      data: null,
    })
  },
)

const deleteBooking = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params
    await BookingServices.deleteBooking(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully deleted Booking',
      data: null,
    })
  },
)

export const BookingController = {
  createBooking,
  getAllBookings,
  updateBooking,
  getSingleBooking,
  deleteBooking,
  getAllBookingOfUser,
}
