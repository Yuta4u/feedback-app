import { AnimatePresence, motion } from "framer-motion"
import FeedbackItem from "./FeedbackItem"
import { useQuery } from "react-query"
import { getAllFeedback } from "../api"

function FeedbackList({ handleDelete }) {
  const { data: feedback, isLoading } = useQuery({
    queryFn: getAllFeedback,
    queryKey: ["feedback"],
  })

  const feedbackData = feedback?.data?.items?.sort((a, b) => b.id - a.id)

  if (isLoading) {
    return <h4>Loading...</h4>
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackData?.length === 0 ? (
          <h4>Belum ada komentar..</h4>
        ) : (
          feedbackData?.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              <FeedbackItem key={item.id} data={item} />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
