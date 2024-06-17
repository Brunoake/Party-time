const router = require("express").Router()

// Services router
const serviceRouter = require("./services")

router.use("/", serviceRouter)

module.exports = router 