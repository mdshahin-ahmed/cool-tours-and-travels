// import { TErrorResponse } from '../../types/TErrorResponse'

// const handleValidationError = (err) => {
//   let errorResponse: TErrorResponse

//   errorResponse.statusCode = 400
//   errorResponse.message = 'Validation Error!'
//   errorResponse.status = 'error'

//   const errorValues = Object.values(err.errors)
//   errorValues.forEach((errObj) => {
//     errorResponse.issues.push({
//       path: errObj.path,
//       message: errObj.message,
//     })
//   })
// }

// // part 3 23m
