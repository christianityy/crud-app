import { connectToDatabase, getCollection } from '../../helpers/db-utils'

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    const client = await connectToDatabase()
    const personsCollection = await getCollection(client, 'persons')
    const result = await personsCollection.insertOne(data)
    client.close()
    res.status(201).json({ message: 'Person Inserted.', result })
  }
}

export default handler
