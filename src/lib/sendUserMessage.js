export default async function sendUserMessage(data) {
    const response = await fetch(`http://localhost:4000/api/v1/users/${data.user.id}/add_message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: data.user.id, message: data.message.content })
      });
    
    return response.json()
}
