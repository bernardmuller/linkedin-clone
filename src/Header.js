import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';


// Icons
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import { logout } from './features/userSlice';


function Header() {
    const dispatch = useDispatch();
    
    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt=""/>

                <div className="header_search">
                    <SearchRoundedIcon />
                    <input placeholder="Search" type="text"/>
                </div>

            </div>
            <div className="header_right">
                <HeaderOption title="Home" Icon={HomeRoundedIcon}/>
                <HeaderOption title="Network" Icon={SupervisorAccountRoundedIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterRoundedIcon} />
                <HeaderOption title="Messaging" Icon={ChatBubbleRoundedIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsRoundedIcon} />
                <HeaderOption title="Me" Icon={AccountBoxRoundedIcon} onClick={logoutOfApp} />
            </div>
        </div>
    )
}


export default Header
