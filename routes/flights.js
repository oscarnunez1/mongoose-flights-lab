import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)

export {
  router
}
