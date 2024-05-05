import "./button.css";

function Button({
  text = "Button",
  onClick = (event) => {
    event.preventDefault();
    console.log(`You clicked: ${text}`);
  },
}) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
