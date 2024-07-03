import './profilePicture.css';
import { getRandomColor, isColorLight, darkenColor } from '../../utils/colorUtils';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

interface Props {
  picture?: string;
  size: string;
  live?: boolean;
}


export default ({ picture , size, live}: Props)=>{
   
  const bgColor = getRandomColor();
  const backgroundColor = (`linear-gradient(20deg, ${darkenColor(bgColor, 35)}, ${bgColor})`);
  const iconColor = isColorLight(bgColor) ? '#FFFFFF' : '#FFFFFF';
  const svg = <PersonOutlineOutlinedIcon className='profile-image' style={{ fill: iconColor, background: backgroundColor }}/>  
  const image = <img className='profile-image' alt="Lordrampanthump\'s Profile Picture" src={picture}></img>
 

  return (
    <div>
    <div className = {`profile-image-wrapper profile-${size}`}>
    <div className='profile-icon'>
        {picture ? image : svg}
    </div>
    {(size === 'large' || size === 'super') && live && 
        <div className='profile-live-indicator-wrapper'>
        <div className='profile-live-indicator-text-mask'>
            <div className='profile-live-indicator-text-wrapper'>
                <p>LIVE</p>
            </div>
        </div>
    </div>
    }
    </div>
    </div>
  );
};


