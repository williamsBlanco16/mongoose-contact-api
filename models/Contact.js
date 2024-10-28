const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  value: { type: Number, required: true },
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  idea: { type: String, required: true },
  extra: { type: String, required: true },
  company: { type: String, required: true },
  consent: { type: Boolean, required: true },
  topics: { type: [topicSchema], default: [] }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
