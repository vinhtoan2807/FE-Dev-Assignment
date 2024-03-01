import { useState, useEffect } from "react";
import { getNotifications, markNotificationAsRead } from "../API";
import { Notification } from "../type";

interface NotificationData {
  notifications: Notification[];
  totalRecords: number;
}

const useNotificationListData = () => {
  const [notificationData, setNotificationData] = useState<NotificationData>({
    notifications: [],
    totalRecords: 0,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications(10, currentPage);
        setNotificationData({
          notifications: data.data,
          totalRecords: data.totalRecords,
        });
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [currentPage]);

  const markAsRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotificationData((prevData) => ({
        ...prevData,
        notifications: prevData.notifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: true }
            : notification
        ),
      }));
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return {
    notifications: notificationData.notifications,
    totalRecords: notificationData.totalRecords,
    currentPage,
    markAsRead,
    handlePageChange,
  };
};

export default useNotificationListData;
