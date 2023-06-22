export default async function getAllRooms() {
    // const axios = configAxios()
    // const res = await axios.get('v1/auth/users')
    // return res.data.data
    const response = await fetch('http://localhost:4000/api/v1/users')

    console.log(response);
  
    return response.json() 
  }
  