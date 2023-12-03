/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userServices } from '../services/user.service'
import catchAsyncFunction from '../utils/catchAsync'
import sendSuccessResponse from '../utils/sendSuccessResponse'

const getAllUsers = catchAsyncFunction(async (req: Request, res: Response) => {
  const result = await userServices.getAllUsers()
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully fetched users',
    data: result,
  })
})

const getSingleUser = catchAsyncFunction(
  async (req: Request, res: Response) => {
    const { id } = req.params

    const result = await userServices.getSingleUser(id)
    sendSuccessResponse(res, {
      statusCode: 200,
      message: 'Successfully fetched user',
      data: result,
    })
  },
)

const createUser = catchAsyncFunction(async (req: Request, res: Response) => {
  const userData = req.body
  const result = await userServices.createUser(userData)
  sendSuccessResponse(res, {
    statusCode: 201,
    message: 'User created successfully!',
    data: result,
  })
})

const updateUser = catchAsyncFunction(async (req: Request, res: Response) => {
  const userData = req.body
  const { id } = req.params
  const result = await userServices.updateUser(id, userData)
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully updated user',
    data: result,
  })
})

const deleteUser = catchAsyncFunction(async (req: Request, res: Response) => {
  const { id } = req.params
  await userServices.deleteUser(id)
  sendSuccessResponse(res, {
    statusCode: 200,
    message: 'Successfully deleted user',
    data: null,
  })
})

export const userController = {
  createUser,
  getAllUsers,
  updateUser,
  getSingleUser,
  deleteUser,
}
