import { Request, Response } from 'express'
import { userServices } from '../services/user.service'

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsers()
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched users',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log('id', id)

    const result = await userServices.getSingleUser(id)
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched user',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userServices.createUser(userData)
    res.status(201).json({
      status: 'success',
      message: 'Successfully added user',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const { id } = req.params
    const result = await userServices.updateUser(id, userData)
    res.status(200).json({
      status: 'success',
      message: 'Successfully updated user',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await userServices.deleteUser(id)
    res.status(200).json({
      status: 'success',
      message: 'Successfully deleted user',
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    })
  }
}

export const userController = {
  createUser,
  getAllUsers,
  updateUser,
  getSingleUser,
  deleteUser,
}
