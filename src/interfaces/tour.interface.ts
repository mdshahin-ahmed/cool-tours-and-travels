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

export { ITour }
