import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
  console.log('Initial req.body', req.body)
  for (let key in req.body) {
    if ( req.body[key] === '') delete req.body[key]
  }
  console.log('After for, in loop', req.body)
  Flight.create(req.body)
  .then(flight => {
    console.log(flight);
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: "All Flights"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteFlight(req, res) {
  console.log("Deleting Flight", req.body)
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/movies")
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render('flights/show', {
      title: 'Flight Details',
      flight: flight,
    })
  })
}

export {
  newFlight as new,
  index,
  create,
  deleteFlight as delete,
  show,
}