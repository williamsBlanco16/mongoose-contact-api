const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  provider: { type: String, required: true },
  scores: { type: Object, required: true }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  idea: { type: String, required: true },
  extra: { type: String, required: true },
  company: { type: String, required: true },
  consent: { type: Boolean, required: true },
  topicsSelected: { type: [String], required: true },
  bestProviders: { type: [providerSchema], required: false }
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
