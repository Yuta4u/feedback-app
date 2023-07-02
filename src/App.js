// components
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"

import { useState } from "react"

function App() {
  const [data, setData] = useState(FeedbackData)

  const deleteFeedBack = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats data={data} />
        {data && <FeedbackList data={data} handleDelete={deleteFeedBack} />}
      </div>
    </>
  )
}

export default App
