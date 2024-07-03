import './profilePicture.css';
import { getRandomColor, isColorLight, darkenColor } from '../../utils/colorUtils';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

interface Props {
  picture?: string;
}


export default ({ picture }: Props)=>{
   
  const bgColor = getRandomColor();
  const backgroundColor = (`linear-gradient(20deg, ${darkenColor(bgColor, 35)}, ${bgColor})`);
  const iconColor = isColorLight(bgColor) ? '#FFFFFF' : '#FFFFFF';
  const svg = <PersonOutlineOutlinedIcon className='profile-image' style={{ fill: iconColor, background: backgroundColor }}/>  
  const image = <img className='profile-image' alt="Lordrampanthump\'s Profile Picture" src={picture}></img>
 
  // SVG definition with drop shadow
  return (
    <div>
    <div className='profile-image-wrapper  profile-small'>
    <div className='profile-icon'>
        {picture ? image : svg}
    </div>
    </div>

    <div className='profile-image-wrapper profile-medium'>
    <div className='profile-icon'>
        {picture ? image : svg}
    </div>
    </div>

    <div className='profile-image-wrapper profile-large'>
    <div className='profile-icon'>
        {picture ? image : svg}
    </div>
    <div className='profile-live-indicator-wrapper'>
        <div className='profile-live-indicator-text-mask'>
            <div className='profile-live-indicator-text-wrapper'>
                <p>LIVE</p>
            </div>
        </div>
    </div>
    </div>

    <div className='profile-image-wrapper profile-super'>
    <div className='profile-icon'>
        {picture ? image : svg}
    </div>
    <div className='profile-live-indicator-wrapper'>
        <div className='profile-live-indicator-text-mask'>
            <div className='profile-live-indicator-text-wrapper'>
                <p>LIVE</p>
            </div>
        </div>
    </div>
    </div>

    <div className='profile-image-wrapper profile-stupid'>
    <div className='profile-icon'>
        {picture ? image : svg}
    </div>
    </div>

    </div>
  );
};


