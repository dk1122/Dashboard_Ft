import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected: ${option}`);
        setIsOpen(false); // Close dropdown after selection
    };

    return (
        <div className="dropdown">
            <div className="dropdown-toggle" onClick={toggleDropdown}>
                <span className="three-dots"><i className='fas fa-dot'></i>...  </span>
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    <a href="#" onClick={() => handleOptionClick('Option 1')}>Add Credits</a>
                    <a href="#" onClick={() => handleOptionClick('Option 2')}>Subscription</a>
                    <a href="#" onClick={() => handleOptionClick('Option 3')}>Rates</a>
                    <a href="#" onClick={() => handleOptionClick('Option 3')}>Reset PAssword</a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;