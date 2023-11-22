import express from 'express'
import { reviewController } from '../controllers/review.controller'

const router = express.Router()

router.get('/', reviewController.getAllReviews)
router.post('/create-review', reviewController.createReview)
// dynamic id gula nicher dile rakhte hobe
router.get('/:id', reviewController.getSingleReview)
router.patch('/:id', reviewController.updateReview)
router.delete('/:id', reviewController.deleteReview)

export const reviewRoutes = router
