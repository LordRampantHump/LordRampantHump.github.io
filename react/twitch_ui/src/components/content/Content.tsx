// import './Content.css';
// import ProfilePicture from '../profilePicture/ProfilePicture';

// export default function Content(){
//    // return <div id="content">{<ProfilePic picture="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png"/>}</div>
//     return <div id="content">
//         <ProfilePicture size='super' live={true} />
//     </div>


// }

import { useEffect, useState } from 'react';
import './Content.css';
import ProfilePicture from '../profilePicture/ProfilePicture';

export default function Content() {
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setToggle(prev => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
          
        <div id="content">
            {/* The key prop will force the component to remount every 3 seconds */}
            <ProfilePicture key={toggle.toString()} size='super' live={true} />
            <p>The above Module (profile pic) is being hot reloaded every 1s.</p>
        </div>
    );
}