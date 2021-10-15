import { MongoClient } from 'mongodb'
export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://<>:<>@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
  )
  return client
}

export async function getCollection(client, collectionString) {
  const db = client.db()
  const col = db.collection(collectionString)
  return col
}
