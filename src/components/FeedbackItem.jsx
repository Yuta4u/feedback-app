import { FaTimes } from "react-icons/fa"
import { useContext } from "react"
import { FeedbackContext } from "../context/FeedbackContext"
import Card from "./shared/Card"

function FeedbackItem({ data }) {
  const { deleteFeedback } = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{data.rating}</div>
      <button className="close" onClick={() => deleteFeedback(data.id)}>
        <FaTimes color="red" />
      </button>
      <div className="text-display">{data.comment}</div>
    </Card>
  )
}

export default FeedbackItem
