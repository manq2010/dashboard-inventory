export default async function addUser(user) {
    const response = await fetch("http://localhost:4000/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  
    return await response.json()
}
  