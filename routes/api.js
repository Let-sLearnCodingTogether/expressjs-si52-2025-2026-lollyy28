import express from "express"
import * as authController from "../controller/authController.js"
import * as profileController from "../controller/profileController.js"

const api = express.Router()

api.post('/register', authController.register)
api.post('/login', authController.login)

api.get('/me', profileController.privateProfile)
export default api