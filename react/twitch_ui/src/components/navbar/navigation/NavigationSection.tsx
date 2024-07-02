
import './NavigationSection.css';
import Logo from "../../../assets/img/logo.webp";
import Link from '../../link/Link';
import IconButton from '../../iconButton/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default () =>{
    return <div id="navigation-section">
        <a className='logo'><img alt="Site Logo" src={Logo}/></a>
        <Link style={{margin: "0px 20px"}} label="Following"/>
        <Link style={{margin: "0px 20px"}} label="Browse"/>
        <IconButton icon={<MoreVertIcon style={{ fontSize: '1.5rem' }}/>} tooltip={{label:"More", position:"bottom"}}/>
    </div>
}