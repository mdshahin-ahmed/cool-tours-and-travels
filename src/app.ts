/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express'
import { userRoutes } from './routes/user.route'
import cors from 'cors'
import { tourRoutes } from './routes/tour.route'
import { reviewRoutes } from './routes/review.route'
import notFound from './middleware/notFound.controller'
import globalErrorHandler from './middleware/globalErrorHandler'
import globalRoute from './routes'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', globalRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Cool tours and travels',
  })
})

// catch all route -> trying to catch a not found

// way -> 1
// app.all('*', (req: Request, res: Response) => {
//   res.status(404).json({
//     status: 'failed',
//     message: `Route not found for ${req.originalUrl}`,
//   })
// })

// way -> 2
// app.all('*', notFound)

// way -> 3
// app.use('*', notFound)

// way -> 4
app.use(notFound)

// global error handler
app.use(globalErrorHandler)

export default app
