import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/rishabamDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Contact Model
const Contact = mongoose.model("Contact", {
  name: String,
  email: String,
  message: String
});

// Routes
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.get("/api/movies", (req, res) => {
  res.json([
    { title: "Rishabam Movie 1", year: 2023 },
    { title: "Rishabam Movie 2", year: 2024 }
  ]);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({ name, email, message });
  await newContact.save();

  res.json({ message: "Message Saved Successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});