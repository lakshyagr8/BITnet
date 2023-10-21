import React, { useState, useEffect } from "react";
import "./Feed.css";
// import Storyreel from "./Storyreel";
import Messagesender from "./Messagesender";
import Post from "./Post";
import db from './firebase'


function Feed() {
  const [profilePic, setProfilePic] = useState('')
  const [postsData, setPostsData] = useState([])
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
    ))
  })
  return (
    <div className="feed">
      <Messagesender />
      {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timestamp}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))}
    </div>
  );
}

export default Feed;
