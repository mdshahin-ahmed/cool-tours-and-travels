import { Schema, model } from 'mongoose'
import { ITour, ITourMethods, TTourModel } from '../interfaces/tour.interface'
import slugify from 'slugify'
// first model then method
const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a tour name'],
    },
    duration: {
      type: Number,
      required: [true, 'Please provide the tour duration'],
    },
    ratingAverage: {
      type: Number,
      default: 0,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Please provide the tour price'],
    },
    availableSeats: {
      type: Number,
      required: [true, 'available Seats is required'],
    },
    imageCover: {
      type: String,
      required: [true, 'Please provide the tour cover image'],
    },
    images: {
      type: [String],
      required: [true, 'Please provide at least one tour image'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDate: {
      type: [Date],
      required: [true, 'Please provide at least one start date'],
    },
    startLocation: {
      type: String,
      required: [true, 'Please provide the start location'],
    },
    locations: {
      type: [String],
      required: [true, 'Please provide at least one tour location'],
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

tourSchema.virtual('durationDays').get(function () {
  return this.duration / 24
})

tourSchema.virtual('reviews', {
  ref: 'review',
  foreignField: 'tour',
  localField: '_id',
})

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

tourSchema.methods.getNextNearestStartDateAndEndDate = function (): {
  nearestStartDate: Date | null
  estimatedEndDate: Date | null
} {
  const today = new Date()

  const futureDates = this.startDate.filter((startDate: Date) => {
    return startDate > today
  })

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime())

  const nearestStartDate = futureDates[0]

  const estimatedEndDate = new Date(
    nearestStartDate.getTime() + this.duration * 60 * 60 * 1000,
  )

  return {
    nearestStartDate,
    estimatedEndDate,
  }
}

const Tour = model<ITour, TTourModel>('tour', tourSchema)

export default Tour
