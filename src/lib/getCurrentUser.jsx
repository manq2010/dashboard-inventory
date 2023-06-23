export default async function getCurrentUser() {
    const response = await fetch('http://localhost:4000/api/v1/users/me')
  
    return response.json() 
  }
