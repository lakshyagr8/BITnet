import React, { useState } from "react";
import "./Messagesender.css";
import { Avatar, input } from "@material-ui/core";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import firebase from './firebase'
import db from './firebase'
import FormData from 'form-data'
import { useStateValue } from "./Stateprovider";

const Messagesender = () => {
  const [input, setInput] = useState('');
  const [imageURL, setImageUrl] = useState('');
  const [image, setImage] = useState(null)
  const [{ user }, dispatch] = useStateValue()
  console.log(user)
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      messagge: input,
      tmestamp: firebase.firestore.FindValue.serverTimestamp(),
      username: user.displayName,
      profilePic: user.photoURL,
      image: imageURL
    })
    setImageUrl('')
    setInput('')
    setImage(null)
  };
  return (
    <div className="msgsnder">
      <div className="msgsndr__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="msgsndr__input"
            placeholder="What's on your mind?"
          />
          <input
            value={imageURL}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="imageURL (optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="msgsndr__bottom">
        <div className="msgsndr__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="msgsndr__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Live Video</h3>
        </div>
        <div className="msgsndr__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Live Video</h3>
        </div>
      </div>
    </div>
  );
}

export default Messagesender;
