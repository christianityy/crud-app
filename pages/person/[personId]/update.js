import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PersonForm from '../../../components/person/PersonForm'
import { MongoClient, ObjectId } from 'mongodb'

export default function PersonUpdatePage({ person }) {
  const router = useRouter()

  const addPersonHandler = async (person_data) => {
    const body = {
      id: router.query.personId,
      firstname: person_data.firstname,
      lastname: person_data.lastname,
      birthdate: person_data.birthdate,
      gender: person_data.gender,
      age: person_data.age,
    }
    const response = await fetch('/api/update-person', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
    router.push(`/person/${router.query.personId}`)
  }

  return (
    <Fragment>
      <Head>
        <title>Update Person</title>
        <meta name="description" content="Update user" />
      </Head>
      <PersonForm
        onAddPerson={addPersonHandler}
        updateFirstname={person.firstname}
        updateLastname={person.lastname}
        updateGender={person.gender}
        updateBirthdate={person.birthdate}
        btnName="Update Person"
      />
    </Fragment>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://mrcagonzales:dx024166@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
  )
  const db = client.db()
  const personsCollection = db.collection('persons')
  const personIds = await personsCollection.find({}, { _id: 1 }).toArray()
  client.close()
  return {
    fallback: false,
    paths: personIds.map((id) => ({ params: { personId: id._id.toString() } })),
  }
}

export async function getStaticProps(context) {
  const personId = context.params.personId
  const client = await MongoClient.connect(
    'mongodb+srv://<>:<>@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
  )
  const db = client.db()
  const personsCollection = db.collection('persons')
  const response = await personsCollection.findOne({ _id: ObjectId(personId) })
  client.close()
  return {
    props: {
      person: {
        firstname: response.firstname,
        lastname: response.lastname,
        gender: response.gender,
        birthdate: response.birthdate,
        age: response.age,
        id: response._id.toString(),
      },
    },
  }
}
