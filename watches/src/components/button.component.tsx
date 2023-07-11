type Button = {
    className: string;
    onClick: (e: any) => void;
    title: string;
}

export const Button: React.FC<Button> = (props) => {
    return (
        <button {...props}>{props.title}</button>
    )
}