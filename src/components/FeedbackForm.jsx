import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

import RatingSelect from "./RatingSelect"

function FeedbackForm() {
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState("")
  const [disabled, setDisabled] = useState(true)

  const handleCommentChange = (e) => {
    if (comment === "") {
      setMessage(null)
      setDisabled(true)
    } else if (comment !== "" && comment.trim().length <= 10) {
      setMessage("Comment must be 10 or more..")
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
        text: comment,
        rating,
      }
      console.log(newComment)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Feel free to give us a comment and rate, thank you!</h2>
        <RatingSelect select={(e) => setRating(e)} selected={rating} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleCommentChange}
            placeholder="Write a review.."
            value={comment}
          ></input>
          <Button type="submit" isDisabled={disabled}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
