import './ButtonBack.css'

interface ButtonBackProps {
    onClick: () => void;
}

function ButtonBack({ onClick }: ButtonBackProps) {
    return (
        <button className="buttonback" onClick={onClick}>
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

export default ButtonBack 