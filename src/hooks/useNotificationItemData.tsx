import { useEffect, useState } from "react";
import { calculateTimeAgo } from "../utils/notificationUtils";
import { Notification } from "../type";
import { getUserAvatar } from "../API/index";

const useNotificationItemData = (
  notification: Notification,
  markAsRead: (id: string) => void
) => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [timeAgo, setTimeAgo] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const url = await getUserAvatar(notification.createdUserId);
        setAvatarUrl(url || null);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };
    fetchAvatar();
  }, [notification.createdUserId]);

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
