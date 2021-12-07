import React from 'react';
import { Avatar } from '@material-ui/core';
// import Headeroptions from './Headeroptions';
import './css/Profilesec.css';
// import LightbulbIcon from '@material-ui/icons/Lightbulb';
// import AccountBoxSharpIcon from '@material-ui/icons/AccountBoxSharp';
// import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
const Profilesec = () => {
    return (
        <>
        <div className='container'>
        <div className='profile'>
        <p>Online</p>
        
<Avatar />

        </div>
        <div className='profile_detail'>
        <h4>Pushpa Kumari</h4>
        <p>Web developer(HTML,CSS,JAVASCRIPT,REACT,NODE.JS & MongoDB)</p>
        </div>
        <div className='profile_git'>
        <p className='button'>pushpa.github<span><input type='button' value='Click here' /></span></p>
        <p className='button'>Hackerank Score<span><input type='button' value='Click here' /></span></p>
        <p className='button'>Leetcode score<span><input type='button' value='Click here' /></span></p>
        </div>
        <div className='profile_info'>
        <h1>Manage my network</h1>
        <hr/>
        <p className='text'>Connections<span>45</span></p>
        <p className='text'>Contacts<span>45</span></p>
        <p className='text'>People I follow<span>45</span></p>
        </div>
        </div>
        </>
    )
}
export default Profilesec;
