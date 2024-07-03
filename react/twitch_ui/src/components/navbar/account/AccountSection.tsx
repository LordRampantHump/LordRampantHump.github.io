import './AccountSection.css';
import IconButton from '../../iconButton/IconButton';
import ProfilePicture from '../../profilePicture/ProfilePicture';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


export default () =>{
    let king = <svg width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" fill="#fff"><path fillRule="evenodd" d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z" clipRule="evenodd"></path></svg>
    let battery = <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="#fff"><path d="M10.114 9.622 11 7 7.175 9.323a.382.382 0 0 0 .013.65l.698.405L7 13l3.825-2.323a.382.382 0 0 0-.012-.65l-.699-.405z"></path><path fillRule="evenodd" d="M18 7h-2V4H2v12h14v-3h2V7zm-4-1v3h2v2h-2v3H4V6h10z" clipRule="evenodd"></path></svg>
    let bits = <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" aria-hidden="true" fill="#fff"><path fillRule="evenodd" clipRule="evenodd" d="M3 12l7-10 7 10-7 6-7-6zm2.678-.338L10 5.487l4.322 6.173-.85.728L10 11l-3.473 1.39-.849-.729z"></path></svg>
    return <div id="account-section">
        
        <IconButton icon={king} tooltip={{label:"Prime Gaming Benifits", position:"bottom"}}/>
        <IconButton icon={<DraftsOutlinedIcon style={{ fontSize: '1.1rem' }}/>} tooltip={{label:"Notifications", position:"bottom"}}/>
        <IconButton icon={<ChatBubbleOutlineOutlinedIcon style={{ fontSize: '1.1rem' }}/>} tooltip={{label:"Whispers", position:"bottom"}}/>
        <IconButton icon={bits} tooltip={{label:"Get Bits", position:"bottom"}}/>
        <IconButton icon={battery} tooltip={{label:"Turbo", position:"bottom"}} text={' Go Ad-Free for Free'}/>
        <ProfilePicture size='small'/>
    </div>
}

