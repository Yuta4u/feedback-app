import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

import RatingSelect from "./RatingSelect"
import { useContext } from "react"
import { FeedbackContext } from "../context/FeedbackContext"

function FeedbackForm() {
  const { addFeedback } = useContext(FeedbackContext)
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState("")
  const [disabled, setDisabled] = useState(true)

  const handleCommentChange = (e) => {
    if (comment === "") {
      setMessage(null)
      setDisabled(true)
    } else if (comment !== "" && comment.trim().length <= 10) {
      setMessage("Komentar harus lebih dari 10 atau lebih..")
      setDisabled(true)
    } else {
      setMessage(null)
      setDisabled(false)
    }
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim().length >= 10) {
      const newComment = {
        comment,
        rating,
      }
      addFeedback(newComment)
    }
    setComment("")
    setRating(10)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Terima kasih telah mengunjungi Github saya ^^</h2>
        <RatingSelect select={(e) => setRating(e)} selected={rating} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleCommentChange}
            placeholder="masukkan komentar.."
            value={comment}
          ></input>
          <Button type="submit" isDisabled={disabled}>
            kirim
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
