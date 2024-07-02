
import { CSSProperties } from 'react';
import './Link.css'

interface Props {
    label: string;
    secondary?: boolean;
    tertiary?: boolean;
    style?: CSSProperties;
}

export default ({ label, secondary, tertiary, style }: Props) => {
    let className = 'link primary-link'; 
    
    if (secondary) {
        className = 'link secondary-link';
    } else if (tertiary) {
        className = 'link tertiary-link';
    }

    return <a style={style} className={className} href="#">{label}</a>;
}