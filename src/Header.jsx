import React from "react";
import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import FlagIcon from "@mui/icons-material/Flag";
import ForumIcon from "@mui/icons-material/Forum";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
// import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
// import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import { useStateValue } from "./Stateprovider";
function Header() {
  const[{user},dispatch]=useStateValue()
  return (
    <div className="header">
      <div className="header__left">
        <img src="./logo2.png" alt="goog" />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="search facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
