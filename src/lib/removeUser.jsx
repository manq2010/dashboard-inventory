
export default async function removeUser(user) {
    const response = await fetch(`http://localhost:4000/api/v1/users/${user.id}`, {
        method: 'DELETE'
    });
    
    return response.json()
}
