import { Schema, model } from 'mongoose'

import { IReview, IReviewModal } from '../interfaces/review.interface'
import Tour from './tour.model'

const reviewSchema = new Schema<IReview, IReviewModal>(
  {
    review: {
      type: String,
      required: [true, 'Please provide a review'],
    },
    rating: {
      type: Number,
      required: [true, 'Please provide a rating'],
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: Schema.Types.ObjectId,
      ref: 'tours',
      required: [true, 'Please provide the associated tour'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'Please provide the associated user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

reviewSchema.index({ tour: 1, user: 1 }, { unique: true })

reviewSchema.virtual('users', {
  ref: 'user',
  foreignField: '_id',
  localField: 'user',
})

reviewSchema.statics.calcAverageRatings = async function (
  tourId: Schema.Types.ObjectId,
) {
  const stats = await this.aggregate([
    // state - 1
    {
      $match: { tour: tourId },
    },
    // state - 2
    {
      $group: {
        _id: '$tour',
        numberOfRatings: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ])
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingQuantity: stats[0].numberOfRatings,
      ratingAverage: stats[0].avgRating,
    })
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingAverage: 0,
      ratingQuantity: 0,
    })
  }
}

const Review = model<IReview, IReviewModal>('review', reviewSchema)

export default Review
