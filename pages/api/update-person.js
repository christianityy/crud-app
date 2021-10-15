import { ObjectId } from 'mongodb'
import { connectToDatabase, getCollection } from '../../helpers/db-utils'
async function handler(req, res) {
  if (req.method === 'PUT') {
    const body = req.body
    const id = body.id
    const client = await connectToDatabase()
    const personsCollection = await getCollection(client, 'persons')
    const result = await personsCollection.updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          firstname: body.firstname,
          lastname: body.lastname,
          age: body.age,
          birthdate: body.birthdate,
          gender: body.gender,
        },
      },
    )
    client.close()
    res.status(200).json({ message: 'Person Updated.', result })
  }
}

export default handler
