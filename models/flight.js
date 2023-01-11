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
    required: true,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date, 
    default: function() {
      let today = new Date()
      console.log("today's date", today);
      let year = today.getFullYear()
      console.log("Current year", year + 1);
      return year + 1
    }
  }
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}