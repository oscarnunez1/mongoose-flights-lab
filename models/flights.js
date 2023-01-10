import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: String,
  airport: String,
  flightNo: Number,
  departs: Date,
})