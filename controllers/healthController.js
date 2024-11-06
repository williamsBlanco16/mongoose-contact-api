exports.healthCheck = (_, res) => {
  res.status(200).json({ message: 'Everything is OK' });
}