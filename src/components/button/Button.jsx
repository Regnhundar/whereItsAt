import "./button.css";

function Button({
  text = "Button",
  onClick = (e) => { e.preventDefault(); console.log(`You clicked: ${text}`); },
  margin = "",
  color = "button--green"
}) {

  const extraMargin = margin === "margin" ? "button button--margin-top" : "button";

  let buttonColor;

  if (color === "red") {
    buttonColor = "button--red";
  } else if (color === "gray") {
    buttonColor = "button--gray";
  } else {
    buttonColor = "button--green";
  }


  return (
    <button className={`${extraMargin} ${buttonColor}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
