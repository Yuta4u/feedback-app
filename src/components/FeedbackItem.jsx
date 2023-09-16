
import Card from "./shared/Card"



function FeedbackItem({ data }) {


  return (
    <Card>
      <div className="num-display">{data.rating}</div>
  
      <div className="text-display">{data.feedback}</div>
    </Card>
  )
}

export default FeedbackItem
