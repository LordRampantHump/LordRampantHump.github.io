import './Navbar.css';
import AccountSection from './account/AccountSection';
import NavigationSection from './navigation/NavigationSection';
import SearchSection from './search/SearchSection';


export default () => {
    return <nav id="navbar">
        <NavigationSection/>
        <SearchSection/>
        <AccountSection/>
    </nav>


}