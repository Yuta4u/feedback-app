// components
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"

import { useState } from "react"

function App() {
  const [data, setData] = useState(FeedbackData)

  const deleteFeedBack = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const addFeedBack = (str) => {
    let newFeedback = data[data.length - 1]
    setData([
      ...data,
      {
        ...newFeedback,
        ["id"]: newFeedback.id + 1,
        ["rate"]: newFeedback.rate - 1,
      },
    ])
  }

  return (
    <>
      <Header />
      <div className="container">
        <button onClick={addFeedBack}>add</button>
        <FeedbackStats data={data} />
        {data && <FeedbackList data={data} handleDelete={deleteFeedBack} />}
      </div>
    </>
  )
}

export default App
