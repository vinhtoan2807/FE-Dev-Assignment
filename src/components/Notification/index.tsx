import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Notification } from "../../type";
import useNotificationItemData from "../../hooks/useNotificationItemData";
import { GetContent } from "./GetContent";

const Notifications: React.FC<{
  notification: Notification;
  markAsRead: (id: string) => void;
  avatarUrl: string | null;
}> = ({ notification, markAsRead }) => {
  const { avatarUrl, timeAgo, handleClick, getNotificationClassName } =
    useNotificationItemData(notification, markAsRead);

  return (
    <div
      className={`notification-item flex align-items-center justify-content-between ${getNotificationClassName(
        notification.isRead
      )}`}
      onClick={handleClick}
    >
      <div className="notification-img">
        {avatarUrl && <img src={avatarUrl} alt="" />}
      </div>
      <div className="notification-content">
        {notification.payload && <GetContent payload={notification.payload} />}
        <div className="notification-time flex align-items-center">
          <FiberManualRecordIcon />
          <span className="notification-time-show">{timeAgo}</span>
        </div>
      </div>
      <FiberManualRecordIcon
        className={`notification-dot${!notification.isRead ? "-unread" : ""}`}
      />
    </div>
  );
};

export default Notifications;
