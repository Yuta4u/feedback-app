import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { v4 as uuidv4 } from "uuid"
import { useMutation, useQueryClient } from "react-query"
import { createFeedback } from "../api"

function FeedbackForm() {
  const queryClient = useQueryClient()
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState("")
  const [disabled, setDisabled] = useState(true)

  const createPostMutation = useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedback"] })
    },
  })

  const handleAddFeedback = (e) => {
    e.preventDefault()
    if (comment.trim().length >= 10) {
      const newFeedback = {
        feedbackId: uuidv4(),
        feedback: comment,
        rating,
      }
      createPostMutation.mutate(newFeedback)
    }
    setComment("")
    setRating(10)
  }

  const handleCommentChange = (e) => {
    if (comment === "") {
      setMessage(null)
      setDisabled(true)
    } else if (comment !== "" && comment.trim().length <= 10) {
      setMessage("Komentar harus lebih dari 10 huruf atau lebih..")
      setDisabled(true)
    } else {
      setMessage(null)
      setDisabled(false)
    }
    setComment(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={handleAddFeedback}>
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
