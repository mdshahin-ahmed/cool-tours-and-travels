/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'
import Booking from '../models/booking.model'
import Tour from '../models/tour.model'

const createBooking = async (BookingData: IBooking): Promise<IBooking> => {
  const session = await mongoose.startSession() // isolated environment

  session.startTransaction()

  try {
    const booking = await Booking.create([BookingData], { session })
    if (!booking) {
      throw new Error('Booking failed')
    }
    const tour = await Tour.findByIdAndUpdate(
      booking[0].tour,
      { $inc: { availableSeats: -booking[0].bookedSlots } },
      { session },
    )
    if (!tour) {
      throw new Error('booking failed')
    }

    await session.commitTransaction()
    await session.endSession()

    return booking[0]
  } catch (error: any) {
    await session.abortTransaction()
    await session.endSession()

    throw new Error(error)
  }

  // const result = await Booking.create(BookingData)
  // if (!result) {
  //   throw new Error('Booking could not be created')
  // }

  // await Tour.findByIdAndUpdate(result.tour, {
  //   $inc: { availableSeats: -result.bookedSlots },
  // })

  // return result
}

const getAllBookings = async (): Promise<IBooking[]> => {
  const result = await Booking.find()
  return result
}

const getSingleBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findById(id)
  return result
}

const updateBooking = async (
  id: string,
  BookingData: IBooking,
): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndUpdate(id, BookingData, {
    new: true,
    runValidators: true,
  })
  return result
}

const getAllBookingOfUser = async (id: string): Promise<IBooking[]> => {
  const result = await Booking.find({ user: id })
  return result
}
const deleteBooking = async (id: string): Promise<IBooking | null> => {
  const result = await Booking.findByIdAndDelete(id)
  return result
}

export const BookingServices = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
  getAllBookingOfUser,
}
