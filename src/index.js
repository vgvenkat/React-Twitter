import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from './Avatar';
import Handle from './Handle';
import Timestamp from './Timestamp';
import Message from './Message';
import LikeButton from './LikeButton';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import MoreOptions from './MoreOptions';

class TweetComponent extends React.Component {
  render() {
    return (
      <div className="tweet">
        <div className="avatar">
          <Avatar />
        </div>
        <div className="tweetContents">
          <div className="tweetMeta">
            <Handle />
            <Timestamp />
           </div> 
          <Message />
          <div className="tweetActionButtons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptions />
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<TweetComponent />, document.querySelector("#root"));