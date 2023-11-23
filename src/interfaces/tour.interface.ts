/* eslint-disable @typescript-eslint/ban-types */
import { Model } from 'mongoose'

interface ITour {
  name: string
  duration: number
  ratingAverage: number
  ratingQuantity: number
  price: number
  imageCover: string
  images: string[]
  createdAt: Date
  startDate: Date[]
  startLocation: string
  locations: string[]
  slug: string
}

// name: Awesome cox's bazar tour
// slug: awesome-cox's-bazar-tour
// tour/awesome-cox's-bazar-tour

interface ITourMethods {
  getNextNearestStartDateAndEndDate(): {
    nearestStartDate: Date | null
    estimatedEndDate: Date | null
  }
}

type TTourModel = Model<ITour, {}, ITourMethods>

export { ITour, ITourMethods, TTourModel }
