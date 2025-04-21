import './ButtonPrimary.css'

interface ButtonPrimaryProps {
    text: string;
}

function ButtonPrimary({ text }: ButtonPrimaryProps) {
    return (
        <button className="button-primary">
            {text}
        </button>
    )
}

export default ButtonPrimary 