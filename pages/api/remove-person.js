import { ObjectId } from 'mongodb'
import { connectToDatabase, getCollection } from '../../helpers/db-utils'
async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    const client = await connectToDatabase()
    const personsCollection = await getCollection(client, 'persons')
    const result = await personsCollection.deleteOne({ _id: ObjectId(data.id) })
    client.close()
    res.status(204).json({ message: 'Person Deleted.', result })
  }
}

export default handler
