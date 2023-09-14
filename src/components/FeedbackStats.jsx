import { useQuery } from "react-query"
import { getAllFeedback } from "../api"

function FeedbackStats() {
  const { data: feedback, isLoading } = useQuery({
    queryFn: getAllFeedback,
    queryKey: ["feedback"],
  })

  const feedbackData = feedback?.data?.items

  let average =
    feedbackData?.reduce((cur, item) => (cur = cur + item.rating), 0) /
    feedbackData?.length

  average = average.toFixed(1).replace(/[.,]0$/, "")

  if (isLoading) {
    return <div></div>
  }

  return (
    <>
      {feedback && (
        <div className="feedback-stats">
          <h4>{feedbackData.length} Komentar</h4>
          <h4>Rata-rata: {isNaN(average) ? 0 : average}</h4>
        </div>
      )}
    </>
  )
}

export default FeedbackStats
