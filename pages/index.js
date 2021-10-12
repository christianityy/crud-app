import { Fragment } from 'react'
import Head from 'next/head'
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Desrciption about Person List" />
      </Head>
      <div className="m-auto container">
        <h1 className="text-2xl text-gray-500">
          Create, Read, Update & Delete Persona; Records
        </h1>
      </div>
    </Fragment>
  )
}
