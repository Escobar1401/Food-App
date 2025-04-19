import './ButtonSecondary.css'

interface ButtonSecondaryProps {
    text?: string;
    link?: string;
}

function ButtonSecondary({ text = 'Button', link = '#' }: ButtonSecondaryProps) {
    return (
        <div className="container">
            <a href={link} className="button-secondary">{text}</a>
        </div>
    )
}

export default ButtonSecondary