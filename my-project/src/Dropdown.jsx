import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dropdown.css'; // Import your CSS file

const Dropdown = () => {
    const nav = useNavigate();
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
                    <a href="#" onClick={() => {nav("/Addcredits")}}>Add Credits</a>
                    <a href="#" onClick={() => {nav("/Subscription")}}>Subscription</a>
                    <a href="#" onClick={() => {nav("/PricingTable")}}>Rates</a>
                    <a href="#" onClick={() => {nav("/Password")}}>Reset PAssword</a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;