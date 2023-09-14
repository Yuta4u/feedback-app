// import { FaTimes } from "react-icons/fa"
import Card from "./shared/Card"

// import { useQueryClient, useMutation } from "react-query"
// import axios from "axios"

function FeedbackItem({ data }) {
  // const queryClient = useQueryClient()

  // const deleteItem = async (feedbackId) => {
  //   await axios.delete(
  //     "http://localhost:3000/feedback/v1/deleteById/" + feedbackId
  //   )
  //   queryClient.invalidateQueries("feedback")
  // }

  // const mutation = useMutation(deleteItem)

  // const handleDelete = (feedbackId) => {
  //   mutation.mutate(feedbackId)
  // }

  return (
    <Card>
      <div className="num-display">{data.rating}</div>
      {/* <button className="close" onClick={() => handleDelete(data.id)}>
        <FaTimes color="red" />
      </button> */}
      <div className="text-display">{data.feedback}</div>
    </Card>
  )
}

export default FeedbackItem
