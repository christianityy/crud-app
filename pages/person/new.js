import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Head from 'next/head'
import PersonForm from '../../components/person/PersonForm'
export default function PersonAddPage() {
  const router = useRouter()
  const addPersonHandler = async (person_data) => {
    const response = await fetch('/api/new-person', {
      method: 'POST',
      body: JSON.stringify(person_data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    router.push('/person')
  }
  return (
    <Fragment>
      <Head>
        <title>Add new person</title>
        <meta name="description" content="Add new person to the database" />
      </Head>
      <PersonForm onAddPerson={addPersonHandler} btnName="Add Person" />
    </Fragment>
  )
}
