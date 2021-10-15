import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PersonForm from '../../../components/person/PersonForm'
import { getPersonById, getPersons } from '../../../helpers/api-util'

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
  const persons = await getPersons()
  let personIds = []
  for (let key in persons) {
    personIds.push({ params: { personId: persons[key]._id } })
  }
  return {
    fallback: false,
    paths: personIds,
  }
}

export async function getStaticProps(context) {
  const personId = context.params.personId
  const person = await getPersonById(personId)
  return {
    props: {
      person: {
        firstname: person.data.firstname,
        lastname: person.data.lastname,
        gender: person.data.gender,
        birthdate: person.data.birthdate,
        age: person.data.age,
        id: person.data._id,
      },
    },
  }
}
