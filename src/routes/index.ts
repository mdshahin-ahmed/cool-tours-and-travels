import express from 'express'
import { routes } from '../constants/routes.constants'

const globalRoute = express.Router()

routes.forEach((route) => {
  globalRoute.use(route.path, route.route)
})

export default globalRoute
