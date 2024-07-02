import './SearchSection.css';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const SearchSection = () => {
    const [inputValue, setInputValue] = useState('');
    const [showClear, setShowClear] = useState(false);
    const [isClearHovered, setIsClearHovered] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <div id="search-section-flex">
        <div id="search-section-wrapper" className={isInputFocused ? 'opened' : 'closed'}>
        <div id="search-input-section">
            <input
                className="search-bar"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value);  setShowClear(e.target.value.length > 0);}}
                onMouseEnter={() => setShowClear(inputValue.length > 0)} 
                onMouseLeave={() => {!isClearHovered ? setShowClear(false) : false}} 
                onBlur={() => {setShowClear(inputValue.length > 0); setIsInputFocused(false)}} 
                onFocus={() => setIsInputFocused(true)}
            />
            {inputValue && showClear && (
                <button
                    className="clear-input"
                    onClick={() => {setInputValue(''); setShowClear(false);}}
                    onMouseEnter={() => setIsClearHovered(true)} 
                    onMouseLeave={() => setIsClearHovered(false)} 
                >
                    <CloseIcon />
                </button>
            )}
            <button className='search-button'><SearchIcon style={{ fontSize: '1.6rem' }} /></button>
        </div>
        {isInputFocused &&
       <div id="search-suggestion-history">
        <div className='search-result'></div>
        <div className='search-result'></div>
        <div className='search-result'></div>
        <div className='search-result'></div>
        <div className='search-result'></div>
       </div>
        }
        </div>
        </div>
        
    );
};

export default SearchSection;
