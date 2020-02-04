import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// You'll implement the receiveMessages in part 2 question 3
import { receiveMessages } from "../../../actions";
import * as api from "../../../api/message";
import Chat from "./Chat";

const ChatContainer = props => {
  const { match } = props;
  const { username } = match.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.fetchMessages(username).then(setMessages);
  }, [username]);

  return <Chat messages={messages} match={match} />;
};

export default ChatContainer;
