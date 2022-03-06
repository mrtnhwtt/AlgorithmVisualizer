import './button.css'
const Button = ({ children, onClickAction }) => {
    return (
        <div>
            <button className="custom-button" onClick={onClickAction}>{children}</button>
        </div>
    );
}

export default Button;