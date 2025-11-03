const express = require("express")
const formRoute = require("./routes/formRoutes")

const app = express()

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTION");
    next();
})

app.use(express.json())

app.use("/api", formRoute)

module.exports = app