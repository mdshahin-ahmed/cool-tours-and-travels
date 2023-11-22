import express from 'express'
import { tourController } from '../controllers/tour.controller'

const router = express.Router()

router.get('/', tourController.getAllTours)
router.post('/create-tour', tourController.createTour)
// dynamic id gula nicher dile rakhte hobe
router.get('/:id', tourController.getSingleTour)
router.patch('/:id', tourController.updateTour)
router.delete('/:id', tourController.deleteTour)

export const tourRoutes = router
