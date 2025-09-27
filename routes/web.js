import express from "express"

const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})
web.get('/:username', profileController.publicProfile)

export default web