import { useRouter } from 'next/dist/client/router'
import { Fragment } from 'react'

export default function PersonDetailPage(props) {
  const router = useRouter()
  const date = new Date(props.birthdate)
  const birthdate =
    date.getUTCMonth() + 1 + '/' + date.getUTCDate() + '/' + date.getFullYear()

  const removePersonHandler = async () => {
    const body = {
      id: props.id,
    }
    const response = await fetch('/api/remove-person', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    router.push('/person')
  }

  const onUpdateUser = () => {
    router.push(`/person/${props.id}/update`)
  }

  return (
    <Fragment>
      <div className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
        <h1 className="text-2xl">Person's Details: </h1>
        <h1>
          <span className="font-semibold">Name:</span> {props.firstname}{' '}
          {props.lastname}
        </h1>
        <h3>
          <span className="font-semibold">Gender:</span> {props.gender}
        </h3>
        <h3>
          <span className="font-semibold">Birthdate:</span> {birthdate}
        </h3>
        <h3 className="lining-nums">
          <span className="font-semibold">Age:</span> {props.age}
        </h3>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={onUpdateUser}
            className="bg-green-500 flex hover:bg-white text-gray-700 font-semibold hover:text-gray-700 py-2 px-4 border  hover:border-transparent rounded"
          >
            Update
          </button>
          <button
            onClick={removePersonHandler}
            className="bg-red-500 flex hover:bg-white text-gray-700 font-semibold hover:text-gray-700 py-2 px-4 border  hover:border-transparent rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </Fragment>
  )
}
