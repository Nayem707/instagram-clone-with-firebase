import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./post.css";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Post = ({ imgURL, userName, userCaption }) => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar className="post-avater">d</Avatar>
        <h4 className="user-name">{userName}</h4>
      </div>
      <img className="user-img" src={imgURL} alt="imaged" />
      <FavoriteBorderOutlinedIcon />
      <ForumOutlinedIcon />
      <BookmarkBorderIcon />
      <h5>{userCaption}</h5>
      <AvatarGroup max={3} className="avatar-group">
        <Avatar alt="R" src="/static/images/avatar/1.jpg" />
        <Avatar alt="T" src="/static/images/avatar/2.jpg" />
        <Avatar alt="C" src="/static/images/avatar/4.jpg" />
        <Avatar alt="D" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </div>
  );
};

export default Post;
