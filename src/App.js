import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"
import AboutIconLink from "./components/AboutIconLink"
import AboutPage from "./pages/AboutPage"
import Post from "./components/Post"

import { FeedbackProvider } from "./context/FeedbackContext"
import { QueryClientProvider, QueryClient } from "react-query"

// Query Client
const queryClient = new QueryClient()

function App() {
  return (
    <FeedbackProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/post/*" element={<Post />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
      </QueryClientProvider>
    </FeedbackProvider>
  )
}

export default App
