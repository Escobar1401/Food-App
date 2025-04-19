import './ButtonSecondary.css'

interface ButtonSecondaryProps {
    text?: string;
    link?: string;
}

function ButtonSecondary({ text = 'Button', link = '#' }: ButtonSecondaryProps) {
    return (
        <a href={link} className="button-secondary">{text}</a>
    )
}

export default ButtonSecondary