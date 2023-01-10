import { Router } from 'express'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// GET localhost:3000/movies
router.get('/', flightsCtrl.index)

export {
  router
}
