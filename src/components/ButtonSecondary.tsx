import './ButtonSecondary.css'

interface ButtonSecondaryProps {
    text?: string;
}

function ButtonSecondary({ text = 'Button' }: ButtonSecondaryProps) {
    return (
        <button className="button-secondary">{text}</button>
        )
}

export default ButtonSecondary