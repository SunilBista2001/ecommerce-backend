/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import {
    deleteUser,
    getUsers,
    updateUser,
} from '../controllers/user.controller'
import { putUser } from '../validators/user.validator'
import { validate } from '../utils/validate'

const router = Router()

router.get('/', getUsers)

router.delete('/:id', deleteUser)

router.put('/update/:id', validate(putUser), updateUser)

export default router
