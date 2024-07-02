import Tooltip from '../tooltip/Tooltip';
import ('./IconButton.css');


interface Props {
    icon: any
    tooltip?: {
        label: string
        position: string
        
    }
    text?: string
}

export default ({icon, tooltip, text}: Props) =>{
   
    return <button className={`icon-button ${text && 'icon-button-text'}`}>
        {icon}
        {text && <span>&nbsp;{text}&nbsp;</span>}
        {tooltip && <Tooltip label={tooltip.label} position={tooltip.position}/>}
        </button> 
        
}