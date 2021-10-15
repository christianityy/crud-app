import Head from 'next/head'
import { Fragment } from 'react'
import PersonDetail from '../../../components/person/PersonDetail'
import { getPersonById, getPersons } from '../../../helpers/api-util'

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
