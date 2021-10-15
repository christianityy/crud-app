import { connectToDatabase, getCollection } from '../../helpers/db-utils'

async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await connectToDatabase()
    const personsCollection = await getCollection(client, 'persons')
    const result = await personsCollection.find().toArray()
    client.close()
    res.status(200).json(result)
  }
}

export default handler
