import axios from "axios"

export async function getAllFeedback() {
  const response = await axios.get(
    `https://feedback-app-be-production.up.railway.app/getall`
  )
  return response
}

export async function createFeedback(newPost) {
  const headers = {
    "Content-Type": "application/json", // Set the content type as JSON
  }
  const response = await axios.post(
    `https://feedback-app-be-production.up.railway.app/feedback`,
    newPost,
    headers
  )
  return response
}

export async function deleteFeedback(id) {
  const response = await axios.delete(
    `http://localhost:3000/feedback/v1/deleteById/${id}`
  )
  return response
}
