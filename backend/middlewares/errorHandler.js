import response from './response.js'

const errorHandler = (err, req, res, next) => {
    response(res, 500, false, err.message, null, err)
    next()   
}

export default errorHandler