import express from 'express'
import {getPaper} from './controller.js'
const router = express.Router()

router.get('/',getPaper)

export default router