import PersonItem from './PersonItem'

export default function PersonList(props) {
  const persons = props.persons.map((person) => (
    <PersonItem
      key={person.id}
      id={person.id}
      firstname={person.firstname}
      lastname={person.lastname}
      gender={person.gender}
      birthdate={person.birthdate}
      age={person.age}
    />
  ))
  return <ul className="container my-3">{persons}</ul>
}
