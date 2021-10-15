export async function getPersonById(id) {
  const response = await fetch(`http://localhost:3000/api/person/${id}`)
  const person = await response.json()
  return person
}

export async function getPersons() {
  const response = await fetch('http://localhost:3000/api/get-persons')
  const persons = await response.json()
  return persons
}
