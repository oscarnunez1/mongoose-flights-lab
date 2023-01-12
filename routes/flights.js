import { Router } from 'express'
import * as flightsCtrl from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)

router.get('/', flightsCtrl.index)
router.get('/:id', flightsCtrl.show)
router.get('/new', flightsCtrl.new)
router.get('/:id/edit', flightsCtrl.edit)

router.delete('/:id', flightsCtrl.delete)

router.put('/:id', flightsCtrl.update)

export {
  router
}
