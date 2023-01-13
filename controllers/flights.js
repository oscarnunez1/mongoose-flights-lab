import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
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
      title: "Flight List"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('meals')
  .then(flight => {
    Meal.find({ _id: {$nin: flight.meals} })
    .then(mealsNotInMeals => {
      res.render('flights/show', {
        title: "Flight Details",
        flight: flight,
        mealsNotInMeals
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/flights")
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/flights")
  })
}

function edit(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    res.render("flights/edit", {
      flight: flight,
      title: "Edit Flight",
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  for (const key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.tickets.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addToMeals(req, res) {
  Flight.findById(req.params.id)
  .then(flight => {
    flight.meals.push(req.body.mealId)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err);
      res.redirect("/movies")
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect("/movies")
  })
}

function deleteTicket(req, res) {
  Flight.findById(req.params.flightId)
  .then((flight)=> {
    flight.tickets.remove({ _id: req.params.ticketId })
    flight.save().then((flight) => res.redirect(`/flights/${flight._id}`))
  })
  .catch((err) => {
    res.redirect(`/flights/${flight._id}`)
  })
}

export {
  newFlight as new,
  index,
  create,
  deleteFlight as delete,
  show,
  edit,
  update,
  createTicket,
  addToMeals,
  deleteTicket,
}