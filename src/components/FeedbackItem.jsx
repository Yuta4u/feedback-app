import { FaTimes } from "react-icons/fa"
import PropTypes from "prop-types"
import Card from "./shared/Card"

function FeedbackItem({ data, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{data.rate}</div>
      <button className="close" onClick={() => handleDelete(data.id)}>
        <FaTimes color="red" />
      </button>
      <div className="text-display">{data.text}</div>
    </Card>
  )
}

FeedbackItem.prototype = {
  data: PropTypes.object.isRequired,
}

export default FeedbackItem
