import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)

// GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

// POST localhost:3000/flights
router.post('/', flightsCtrl.create)

// DELETE localhost:3000/flights/:id
router.delete('/:id', flightsCtrl.delete)

router.get('/:id', flightsCtrl.show)

router.get('/:id/edit', flightsCtrl.edit)

router.get('/:id', flightsCtrl.update)

export {
  router
}
