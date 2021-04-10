import React, { useState, useEffect } from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';

// Icons
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1618076410~hmac=eaf2374de80b2824bdd3bbeed13b1c32" alt=""/>

                <div className="header_search">
                    <SearchRoundedIcon />
                    <input type="text"/>
                </div>

            </div>
            <div className="header_right">
                <HeaderOption title="Home" Icon={HomeRoundedIcon}/>
                <HeaderOption title="Network" Icon={SupervisorAccountRoundedIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterRoundedIcon} />
                <HeaderOption title="Messaging" Icon={ChatBubbleRoundedIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsRoundedIcon} />
                <HeaderOption title="Me" Icon={AccountBoxRoundedIcon} />
            </div>
        </div>
    )
}


export default Header
