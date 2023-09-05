import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      comment: "This item is from context",
      rating: 10,
    },
  ])

  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuidv4()
    setFeedback([newFeedBack, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export { FeedbackContext, FeedbackProvider }
