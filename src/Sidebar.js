import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => {
        return <div className="sidebar_recentItem" >
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>

    }

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                <Avatar className="sidebar_avatar"/>
                <h2>Username</h2>
                <h4>email</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">3,455</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on posts</p>
                    <p className="sidebar_statNumber">2.448</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('ReactJS')}
                {recentItem('Programming')}
                {recentItem('Software Enigneering')}
                {recentItem('Design')}
                {recentItem('Developer')}
            </div>
        </div>
    )
}

export default Sidebar;
