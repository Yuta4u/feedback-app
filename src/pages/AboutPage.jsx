import { Link } from "react-router-dom"
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>Tentang Project ini</h1>
        <p>
          Project ini adalah project iseng untuk belajar deploy, design,
          sekaligus menerima feedback dari para visitor.
        </p>
        <p>
          <Link to="/">kembali ke halaman utama</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage
