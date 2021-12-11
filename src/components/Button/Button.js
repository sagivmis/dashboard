import "./Button.css";
const Button = ({
    text,
    onClick,
    classN = "btn",
    color = "black",
    fontColor = "white",
}) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${classN}`}
            style={{ color: fontColor }}
        >
            {text}
        </button>
    );
};

export default Button;
