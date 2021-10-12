import { MongoClient, ObjectId } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    const client = await MongoClient.connect(
      'mongodb+srv://<>:<>@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
    )
    const db = client.db()
    const personsCollection = db.collection('persons')
    const result = await personsCollection.deleteOne({ _id: ObjectId(data.id) })
    client.close()
    res.status(204).json({ message: 'Person Deleted.' })
  }
}

export default handler
