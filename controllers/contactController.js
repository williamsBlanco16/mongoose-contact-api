const Contact = require('../models/Contact');
const { Client } = require("@hubspot/api-client");

exports.createContact = async (req, res) => {
  try {
    const hubspotApiKey = process.env['API_KEY_HUBSPOT'];
    if (!hubspotApiKey) {
      return res.status(500).json({ message: 'API Key de HubSpot no configurada' });
    }
    const hubspotClient = new Client({ accessToken: hubspotApiKey });
    const contact = new Contact(req.body);
    await contact.save();

    const hubspotData = {
      properties: {
        email: contact.email,
        firstname: contact.name,
        lastname: contact.surname,
        phone: contact.phone || '',
        company: contact.company,
        website: contact.website || '', 
        idea: contact.idea,
        extra: contact.extra,
        consent: contact.consent,
        gdpr: contact.marketingConsent,
        topics: contact.topicsSelected.join(', '),
        result: contact.bestProviders ? JSON.stringify(contact.bestProviders) : '',
      }
    };

    const response = await hubspotClient.crm.contacts.basicApi.create(hubspotData)

    res.status(201).json({
      contact,
      hubspotResponse: response.data
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
