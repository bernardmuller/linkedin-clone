import React, {useState} from 'react';
import './Feed.css';

// components
import InputOption from './InputOption';
import Post from './Post';

// icons
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function Feed() {

    const [posts, setPosts] = useState([])

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form action="">
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title='Photo' color='#7085F9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarTodayIcon} title='Write Article' color='#7FC15E' />
                </div>
            </div>
            {posts.map((post) => (
                <Post />
            ))}
            <Post name='Bernard Muller' description='testing testing 1..2..' message='WOW,, it worked'/>

        </div>
    )
}

export default Feed;
