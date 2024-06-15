const router = require("express").Router()

// Services router
const serviceRouter = require("./service")

router.use("/", serviceRouter)

module.exports = router 