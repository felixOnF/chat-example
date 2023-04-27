import { Launcher } from "react-chat-window";
import socket from "../socket";

const Messages = ({ events }) => {
  const _onMessageWasSent = (message) => {
    socket.emit("frontendToBackend", message);
  };

  return (
    <>
      <div>
        <Launcher
          agentProfile={{
            teamName: "chat-example",
            imageUrl:
              "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
          }}
          onMessageWasSent={_onMessageWasSent}
          messageList={events}
          showEmoji
        />
      </div>
    </>
  );
};

export default Messages;
