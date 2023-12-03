import { Request, Response } from 'express'

const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'failed',
    message: `Route not found for ${req.originalUrl}`,
  })
}

export default notFound
