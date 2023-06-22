export default async function getUserMessages(user) {
    const response = await fetch(`http://localhost:4000/api/v1/users/${user.id}/messages`)
    return await response.json()
}
