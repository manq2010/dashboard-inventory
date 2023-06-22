export default async function getAllUsers() {
  const response = await fetch('http://localhost:4000/api/v1/users')

  return response.json() 
}
