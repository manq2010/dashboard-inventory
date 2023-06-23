export default async function getAllRooms() {
    const response = await fetch('http://localhost:4000/api/v1/rooms')

    console.log(response);
  
    return response.json() 
  }
  