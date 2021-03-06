import Head from 'next/head'
import { Fragment } from 'react'
import PersonList from '../../components/person/PersonList'
import { getPersons } from '../../helpers/api-util'

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
  const persons = await getPersons()
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
