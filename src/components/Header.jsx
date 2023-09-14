function Header({ text, bgColor, textColor }) {
  const headerStyled = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyled}>
      <div className="container">
        <h2>Yuta Feedback</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
}

export default Header
