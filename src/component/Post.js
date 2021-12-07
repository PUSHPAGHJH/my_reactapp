import React from 'react';
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './css/Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';


const Post = ({name,description,message,PhotoUrl}) => {
    return (
        <div className='post'>
        <div className='post_header'>
        <div className='post_header_left'>
        <Avatar src={PhotoUrl} />
        <div className='post_header_profile_detail'>
        <h3>{name}</h3>
        <p>{description}</p>
        </div>
        </div>
        <MoreVertIcon />
        </div>
            <div className='post_body'>
            <p>{message}</p>
            </div>
            <div className='post_footer'>
            <div className='post_footer_option'>
            <ThumbUpIcon />
            <span>Like</span>
            </div>
            <div className='post_footer_option'>
            <ChatBubbleOutlineIcon/>
            <span>Comment</span>

            </div>

            <div className='post_footer_option'>
            <ShareIcon />
            <span>Share</span>
            </div>
            <div className='post_footer_option'>
            <SendIcon />
            <span>Send</span>
            </div>
 </div>
        </div>
    )
}

export default Post;
