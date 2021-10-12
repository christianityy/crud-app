import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'
import { Fragment } from 'react'
import PersonDetail from '../../../components/person/PersonDetail'

export default function PersonDetailPage(props) {
  const { id, firstname, lastname, birthdate, gender, age } = props.person
  return (
    <Fragment>
      <Head>
        <title>{`${firstname}${' '}${lastname}`}</title>
        <meta name="description" content="Desrciption about person" />
      </Head>
      <PersonDetail
        id={id}
        firstname={firstname}
        lastname={lastname}
        gender={gender}
        age={age}
        birthdate={birthdate}
      />
    </Fragment>
  )
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://<>:<>@cluster0.9ysec.mongodb.net/persons?retryWrites=true&w=majority',
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
