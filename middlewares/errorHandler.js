function errorHandler(err, req, res, next) {
    res.status(err.status || 500).send({
        error: {
            message: err.message,
            status: err.status || 500,
            timestamp: new Date(),
            path: req.path
        }
    })
    next()
}

export default errorHandler;