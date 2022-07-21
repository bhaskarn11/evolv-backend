function errorHandler(err, req, res) {
    res.status(err.status || 500).send({
        error: {
            message: err.message,
            status: err.status || 500,
            timestamp: new Date(),
            path: req.path
        }
    })
}

export default errorHandler;