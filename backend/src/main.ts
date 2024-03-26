import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Replace with your actual connection string
const mongoConnectionString = 'mongodb://localhost:27017/icepanelTechChoices';

// Define a schema for the technology choice
const techChoiceSchema = new mongoose.Schema({
  name: String,
  shortName: String,
  description: String,
  websiteLink: String,
  documentationLink: String,
  releaseNotesLink: String,
  brandColour: String,
  c4ModelAbstraction: String,
});

const TechChoice = mongoose.model('TechChoice', techChoiceSchema);

// Connect to MongoDB
mongoose.connect(mongoConnectionString);
app.use(bodyParser.json());

app.post('/tech-choice', async (req, res) => {
  try {
    const techChoice = new TechChoice(req.body);
    await techChoice.save();
    res.status(201).send(techChoice);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});