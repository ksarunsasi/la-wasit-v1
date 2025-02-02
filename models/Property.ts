import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  type: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Property ||
  mongoose.model("Property", PropertySchema);
