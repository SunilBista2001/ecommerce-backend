/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import userRouter from '../routes/user.routes'
import authRouter from '../routes/auth.routes'

import {
    authenticateToken,
    isAdmin,
} from '../middlewares/authentication.middleware'

const router = Router()

router.use('/users', userRouter)

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
router.use('/', authRouter)

router.get('/feed', authenticateToken, isAdmin, (req, res) => {
    res.send('working feed')
})

export default router
