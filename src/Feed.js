import React, {useState, useEffect} from 'react';
import './Feed.css';
import { db } from './firebase';
import firebase from 'firebase';

// components
import InputOption from './InputOption';
import Post from './Post';

// icons
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            ))
          )
        );        
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })        

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                    
                        <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        type="text"
                        />                        
                        <button 
                        onClick={sendPost} 
                        type="submit"
                        >Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={ImageIcon} title='Photo' color='#7085F9' />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                    <InputOption Icon={CalendarTodayIcon} title='Write Article' color='#7FC15E' />
                </div>
            </div>
            {posts.map(({ id, data: { name, description, message }}) => (
                <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                />
            ))}
           
        </div>
    )
}

export default Feed;
