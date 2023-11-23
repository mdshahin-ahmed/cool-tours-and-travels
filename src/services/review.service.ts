import { IReview } from '../interfaces/review.interface'
import Review from '../models/review.model'

const createReview = async (ReviewData: IReview): Promise<IReview> => {
  const result = await Review.create(ReviewData)
  return result
}

const getAllReviews = async (): Promise<IReview[]> => {
  const result = await Review.find().populate({
    path: 'users',
    select: 'name photo',
  })
  return result
}

const getSingleReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findById(id)
  return result
}

const updateReview = async (
  id: string,
  ReviewData: IReview,
): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(id, ReviewData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteReview = async (id: string): Promise<IReview | null> => {
  const result = await Review.findByIdAndDelete(id)
  return result
}

export const ReviewServices = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
}
