import "./button.css";

function Button({
  text = "Button",
  onClick = (e) => {
    e.preventDefault();
    console.log(`You clicked: ${text}`);
  },
  margin = ""
}) {

  const extraMargin = margin === "big" ? "button button--big-margin" : "button";
  return (
    <button className={extraMargin} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
