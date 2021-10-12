import { MongoClient } from 'mongodb'
import Head from 'next/head'
import { Fragment } from 'react'
import PersonList from '../../components/person/PersonList'

export default function PersonListPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Person List</title>
        <meta name="description" content="Desrciption about Person List" />
      </Head>
      <PersonList persons={props.persons} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://mrcagonzales:dx024166@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
  )
  const db = client.db()
  const personsCollection = db.collection('persons')
  const persons = await personsCollection.find().toArray()
  client.close()
  return {
    props: {
      persons: persons.map((person) => ({
        firstname: person.firstname,
        lastname: person.lastname,
        gender: person.gender,
        birthdate: person.birthdate,
        age: person.age,
        id: person._id.toString(),
      })),
    },
  }
}
