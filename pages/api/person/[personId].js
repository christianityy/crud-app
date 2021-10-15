import { connectToDatabase, getCollection } from '../../../helpers/db-utils'
import { ObjectId } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'GET') {
    const { personId } = req.query
    const client = await connectToDatabase()
    const personsCollection = await getCollection(client, 'persons')
    const response = await personsCollection.findOne({
      _id: ObjectId(personId),
    })
    res.status(200).json({ data: response })
  }
}

export default handler
