import React from 'react';
import {Avatar} from '@material-ui/core' ;
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import TodayIcon from '@material-ui/icons/Today';
import './css/feed.css';
import Post from './Post';
// import Projectsec from './Projectsec';
const Feed = () => {
    return (
        <div className='feed'>
        <div className='feed_input'>
        <div className='feed_form'>
        <Avatar style={{'margin-left':'89px'}}/>
        <form>
        <input type='text' placeholder='Post here' />
        <input type='submit' />
        </form>
        </div>
        <div className='feed_options' >
        <div className='option'>
        <TodayIcon style={{color:'#e7fc15ee'}} />
        <span>Start Event</span>
        </div>
        <div className='option'>
        <VideoLibraryIcon style={{color:'rgba(255, 0, 0, 0.493)'}} />
        <span>Add video </span>
        </div>
        <div className='option'>
        <PhotoLibraryIcon style={{color:'#70b5f9'}} />
        <span>Add photo </span>
        </div>
        </div>
        </div>
        <Post name='Pushpa Kumari' description='this is my new post' message='I am happy' PhotoUrl='' />
        <Post name='Pushpa Kumari' description='this is my new post' message='I am happy' PhotoUrl='' />
        <Post name='Pushpa Kumari' description='this is my new post' message='I am happy' PhotoUrl='' />
        <Post name='Pushpa Kumari' description='this is my new post' message='I am happy' PhotoUrl='' />
       
        </div>
           
        )
}
export default Feed;
