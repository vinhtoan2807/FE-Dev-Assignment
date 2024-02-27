import { useState, useEffect } from "react";
import { getNotifications, markNotificationAsRead } from "../API";
import { Notification } from "../type";

const useNotificationData = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications(10, currentPage);
        setNotifications(data.data);
        setTotalPages(Math.ceil(data.totalRecords / 10));
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [currentPage]);

  const markAsRead = async (notificationId: string) => {
    try {
      await markNotificationAsRead(notificationId);
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, isRead: true }
            : notification
        )
      );
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
    notifications,
    totalPages,
    currentPage,
    markAsRead,
    handlePageChange,
  };
};

export default useNotificationData;
