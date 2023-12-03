/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { userServices } from '../services/user.service'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userServices.getAllUsers()
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched users',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}
const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params

    const result = await userServices.getSingleUser(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched user',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    const result = await userServices.createUser(userData)
    sendSuccessResponse(res, {
      statusCode: 201,
      message: 'User created successfully!',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body
    const { id } = req.params
    const result = await userServices.updateUser(id, userData)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully updated user',
      data: result,
    })
  } catch (error: any) {
    next(error)
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    await userServices.deleteUser(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully deleted user',
      data: null,
    })
  } catch (error: any) {
    next(error)
  }
}

export const userController = {
  createUser,
  getAllUsers,
  updateUser,
  getSingleUser,
  deleteUser,
}
