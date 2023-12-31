import axios from "axios"

export async function getAllFeedback() {
  const headers = {
    "Content-Type": "application/json",
  }

  const response = await axios.get(
    `https://feedback-app-be-production.up.railway.app/getall`,
    headers
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
