import React from 'react'
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Sidebar() {
  return (
    <div className="sidebar">
      {/* Jabber icon */}
      <TwitterIcon />

      <SidebarOption Icon={HomeIcon} text="Home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlineIcon} text="Mail"/>
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark"/>
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More"/>
    </div>
  );
}

export default Sidebar;