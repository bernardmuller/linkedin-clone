import React from 'react';
import './Post.css';

//components
import InputOption from './InputOption'

//icons
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import { Avatar } from "@material-ui/core";
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';


function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>                
            </div>

            <div className="post_body">
                    <p>{message}</p>
            </div>
            
            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltRoundedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatBubbleRoundedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareRoundedIcon} title='Share' color='gray' />
                <InputOption Icon={SendRoundedIcon} title='Send' color='gray' />
            </div>

        </div>
    )
}

export default Post
