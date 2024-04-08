import React, { useState } from 'react';
import './UserProfileDropDown.css';


const UserProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = () => {
  };
  const firstName = 'Jane';
  const lastName = 'Smith';
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;
  return (
    <div className="user-profile-dropdown">
      <button className="profile-button" onClick={toggleDropdown}>
      {initials.toUpperCase()}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p> {firstName} {lastName}</p>
          <p>jane.smith@me.com</p>
          <a href="/profile">View Profile</a>
          <button className='signout' onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropDown;
