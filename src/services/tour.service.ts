import { ITour } from '../interfaces/tour.interface'
import Tour from '../models/tour.model'

const createTour = async (TourData: ITour): Promise<ITour> => {
  const result = await Tour.create(TourData)
  return result
}

const getAllTours = async (): Promise<ITour[]> => {
  const result = await Tour.find()
  return result
}

const getSingleTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findById(id)
  return result
}

const updateTour = async (
  id: string,
  TourData: ITour,
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(id, TourData, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteTour = async (id: string): Promise<ITour | null> => {
  const result = await Tour.findByIdAndDelete(id)
  return result
}

export const TourServices = {
  createTour,
  getAllTours,
  getSingleTour,
  updateTour,
  deleteTour,
}
