import { useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function PersonForm(props) {
  const [selectedDate, setSelectedDate] = useState(
    props.updateBirthdate ? new Date(props.updateBirthdate) : new Date(),
  )
  const [firstname, setFirstname] = useState(props.updateFirstname ?? '')
  const [lastname, setLastname] = useState(props.updateLastname ?? '')
  const [gender, setGender] = useState(props.updateGender ?? 'male')

  const onEnteredFirstnameHandler = (event) => {
    setFirstname(event.target.value)
  }

  const onEnteredLastnameHandler = (event) => {
    setLastname(event.target.value)
  }

  const onSelectedGenderHandler = (event) => {
    setGender(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault()
    const calculatedAge = new Date().getFullYear() - selectedDate.getFullYear()

    const personData = {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      birthdate: selectedDate,
      age: calculatedAge,
    }

    props.onAddPerson(personData)
  }

  return (
    <form
      className="bg-pink-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={submitHandler}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstname"
        >
          First name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={firstname}
          required
          id="firstname"
          onChange={onEnteredFirstnameHandler}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastname"
        >
          Last name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          required
          value={lastname}
          id="lastname"
          onChange={onEnteredLastnameHandler}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="birthdate"
        >
          Birthdate
        </label>
        <DatePicker
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          maxDate={new Date()}
          showYearDropdown
          scrollableMonthYearDropdown
          scrollableYearDropdown
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="gender"
        >
          Gender
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={onSelectedGenderHandler}
          id="gender"
          defaultValue={gender}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <button className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
          {props.btnName}
        </button>
      </div>
    </form>
  )
}

export default PersonForm
