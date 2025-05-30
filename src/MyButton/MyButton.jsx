import "./MyButton.css"

function MyButton({ text, url, color, width, height, margin, borderRadius, textTransform, background, onClick }) {
  const style = {
    margin,
    color,
    width,
    height,
    borderRadius,
    textTransform,
    background
  }

  const clickHandler = () => {
    if (url) {
      window.open(url, '_target')
    }
    onClick(text)
  }

  return (
    <button
        onClick={clickHandler}
        style={style}
    >
        { text }
    </button>
  );
}

export default MyButton