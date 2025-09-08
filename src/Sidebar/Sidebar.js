import React from 'react'
import logo from '../assets/img/instagram-logo.jpg'
import '../Sidebar/Sidebar.css'
function Sidebar() {
  return (
    <>
       <div>
          <img className='logo-text' src={logo} alt='logo'/>
          <div>Home</div>
          <div>Search</div>
          <div>Explore</div>
          <div>Reels</div>
          <div>Messages</div>
          <div>Notifications</div>
          <div>Create</div>
          <div>Profile</div>
       </div>
       <div className='pt-3'>
          <div>Threads</div>
          <div>More</div>
       </div>
    </>
  )
}

export default Sidebar;