import React from 'react';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PeopleSharpIcon from '@material-ui/icons/PeopleSharp';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SearchIcon from '@material-ui/icons/Search';
import './css/Header.css';
import { Avatar } from '@material-ui/core';
import Headeroptions from './Headeroptions';
const Header = () => {
    return (
        <div>
            <div className='header'>
            <div className='left'>
            <div className='logo'>
            <img src='/logo.jpeg' alt='image' />
            </div>
            <div className='search'>
            <SearchIcon />
           <input type='text' placeholder='Search here' />
            </div>
            </div>
            <div className='right'>
            <Headeroptions style={{color:'rgba(255, 0, 0, 0.493)'}} Icon={HomeSharpIcon } title='Home' />
            <Headeroptions Icon={PeopleSharpIcon} title='My Network' />
            <Headeroptions Icon={ChatIcon } title='Message' />
            <Headeroptions Icon={DeveloperModeIcon } title='Access project' />
            <Headeroptions  Icon={NotificationsIcon } title='Notifications' />
            <Headeroptions avatar={Avatar} title='Pushpa' />
            </div>
            </div>
        </div>
    )
}

export default Header;
