import { Schema } from 'mongoose'

export interface IBooking {
  user: Schema.Types.ObjectId
  tour: Schema.Types.ObjectId
  bookedSlots: number
  price: number
  bookingStatus: 'pending' | 'paid' | 'cancelled'
}
