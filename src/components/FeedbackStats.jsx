function FeedbackStats({ data }) {
  const average =
    data.reduce((cur, item) => (cur = cur + item.rate), 0) / data.length

  return (
    <div className="feedback-stats">
      <h4>{data.length} Reviews</h4>
      <h4>Average: {average}</h4>
    </div>
  )
}

export default FeedbackStats
