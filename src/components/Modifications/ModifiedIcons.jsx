export function ColoredIcon ({ Icon, color }){
    return (
        <span className={color}>
        <Icon />
        </span>
        
    );
}