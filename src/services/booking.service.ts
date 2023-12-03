import { IBooking } from '../interfaces/booking.interface'
import Booking from '../models/booking.model'

const createBooking = async (BookingData: IBooking): Promise<IBooking> => {
  const result = await Booking.create(BookingData)
  return result
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
}
