import { MongoClient, ObjectId } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'PUT') {
    const body = req.body
    const id = body.id
    const client = await MongoClient.connect(
      'mongodb+srv://user:password@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
    )
    const db = client.db()
    const personsCollection = db.collection('persons')
    const response = await personsCollection.updateOne(
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
    res.status(200).json({ message: 'Person Updated.', response: response })
  }
}

export default handler
