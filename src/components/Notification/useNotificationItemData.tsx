import { useEffect, useState } from "react";
import { calculateTimeAgo } from "../../utils/notificationUtils";
import { Notification } from "../../type";

const useNotificationItemData = (
  notification: Notification,
  markAsRead: (id: string) => void,
  avatarUrl: string | null
) => {
  const [timeAgo, setTimeAgo] = useState<string | null>(null);

  useEffect(() => {
    if (notification.createdAt) {
      setTimeAgo(calculateTimeAgo(notification.createdAt));
    }
  }, [notification.createdAt]);

  const handleClick = () => {
    if (!notification.isRead) {
      markAsRead(notification.id);
    }
  };

  const getNotificationClassName = (isRead: boolean) => {
    return isRead ? "read" : "unread";
  };

  return { avatarUrl, timeAgo, handleClick, getNotificationClassName };
};

export default useNotificationItemData;
