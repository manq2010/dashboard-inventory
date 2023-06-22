export default async function getMessages() {
    const response = await fetch("http://localhost:4000/api/v1/messages")
    return await response.json()
}
