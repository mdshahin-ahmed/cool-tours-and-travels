import { Schema, model } from 'mongoose'
import { IBooking } from '../interfaces/booking.interface'

const bookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: 'tour',
    },
    bookedSlots: {
      type: Number,
      required: [true, 'A booking must have booked slots'],
    },
    bookingStatus: {
      enum: ['pending', 'cancelled', 'paid'],
      required: [true, 'A booking must have a bookingStatus '],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const Booking = model<IBooking>('booking', bookingSchema)

export default Booking
