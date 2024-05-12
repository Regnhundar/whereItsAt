import "./button.css";

function Button({
  text = "Button",
  onClick = (e) => { e.preventDefault(); console.log(`You clicked: ${text}`); },
  margin = "",
  color = "turquoise"
}) {

  const extraMargin = margin === "margin" ? "button button--margin-top" : "button";

  return (
    <button className={`${extraMargin} button--${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
