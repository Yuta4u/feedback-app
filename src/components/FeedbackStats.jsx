import PropTypes from "prop-types"

function FeedbackStats({ data }) {
  let average =
    data.reduce((cur, item) => (cur = cur + item.rate), 0) / data.length

  average = average.toFixed(1).replace(/[.,]0$/, "")

  return (
    <div className="feedback-stats">
      <h4>{data.length} Reviews</h4>
      <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.prototype = {
  data: PropTypes.array.isRequired,
}

export default FeedbackStats
