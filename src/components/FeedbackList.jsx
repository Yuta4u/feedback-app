import FeedbackItem from "./FeedbackItem"

function FeedbackList({ data, handleDelete }) {
  return (
    <div className="feedback-list">
      {data?.map((item) => (
        <FeedbackItem key={item.id} data={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default FeedbackList
