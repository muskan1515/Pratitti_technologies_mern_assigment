module.exports = (req, res, next) => {
    res.status(404).send({ success: false, message: "Route Not Found" })
}