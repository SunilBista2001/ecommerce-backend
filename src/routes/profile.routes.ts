/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { authenticateToken } from '../middlewares/authentication.middleware'
import { getProfile, updateProfile } from '../controllers/profile.controller'

const router = Router()

router.get('/', authenticateToken, getProfile)

router.put('/:id', updateProfile)

export default router
