// api/hello

// req = request data
// res = response data
export default (req, res) => {
  res.status(200).json({ text: 'Hello!'})

  // Handle Form Input
  // const email = req.body.email
  // Then save email to your database, etc...
}
