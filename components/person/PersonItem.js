import { useRouter } from 'next/router'
export default function PersonItem(props) {
  const router = useRouter()
  const date = new Date(props.birthdate)
  const birthdate =
    date.getUTCMonth() + 1 + '/' + date.getUTCDate() + '/' + date.getFullYear()
  const showDetails = () => {
    router.push(`/person/${props.id}`)
  }
  return (
    <li className="mb-5">
      <div className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
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
        <button
          onClick={showDetails}
          className="mt-2 right-0 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
        >
          Show Details
        </button>
      </div>
    </li>
  )
}
