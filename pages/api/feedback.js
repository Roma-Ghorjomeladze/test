import Airtable from 'airtable'

export default function feedback(req, res) {
  const base = Airtable.base('appmrIEGfi6XWeXaY')

  const fields = req.body

  base('Site Feedback').create([{ fields }], function(err, records) {
    if (err) {
      console.error(err)
      res.json({ message: 'Uh oh spagehtti-o' })
      return
    }

    res.json({ message: 'Thanks for your feedback!' })
  })
}
