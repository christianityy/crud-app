import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    const client = await MongoClient.connect(
      'mongodb+srv://mrcagonzales:dx024166@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
    )
    const db = client.db()
    const personsCollection = db.collection('persons')
    const result = await personsCollection.insertOne(data)
    client.close()
    res.status(201).json({ message: 'Person Inserted.' })
  }
}

export default handler
