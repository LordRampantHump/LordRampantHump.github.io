import './Tooltip.css'


interface Props {
    label: string;
    position: string;
    
}
export default ({ label, position}: Props)=>{
    const className = `tooltip tooltip-${position}`
    return <span className={className}>{label}</span>
}