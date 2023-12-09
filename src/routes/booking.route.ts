import express from 'express'
import { BookingController } from '../controllers/booking.controller'

const router = express.Router()

router.get('/', BookingController.getAllBookings)
router.post('/create-booking', BookingController.createBooking)
// dynamic id gula nicher dile rakhte hobe
router.get('/:id', BookingController.getSingleBooking)
router.patch('/:id', BookingController.updateBooking)
router.get('/:userId/get-all-bookings', BookingController.getAllBookingOfUser)
router.delete('/:id', BookingController.deleteBooking)

export const bookingRoutes = router
