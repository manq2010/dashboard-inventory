export default async function addRoom(room) {
    const response = await fetch(`http://localhost:3090/users/${room.id}/add_message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id: data.user.id, message: data.message.content })
    });
  
    return response.json()
}