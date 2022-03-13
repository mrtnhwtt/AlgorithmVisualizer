import './button.css'
const Button = ({ children, onClickAction, desactivated }) => {
    return (
        <div>
            <button disabled={desactivated} className="custom-button" onClick={onClickAction}>{children}</button>
        </div>
    );
}

export default Button;