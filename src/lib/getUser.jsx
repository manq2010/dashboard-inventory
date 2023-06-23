export default async function getUser(user_id) {
    const response = await fetch(`http://localhost:4000/api/v1/users/${user_id}`)
  
    return response.json() 
  }
  