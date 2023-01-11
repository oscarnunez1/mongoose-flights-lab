import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]
  },
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: function defaultDeparture() {
      today = new Date()
      aYearFromToday = today.getFullYear() + 1
      today.setFullYear(aYearFromToday)
      return today
  }},
  
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}