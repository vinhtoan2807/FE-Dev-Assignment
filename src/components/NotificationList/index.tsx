import React, { useState, useEffect } from "react";
import Notifications from "../Notification/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Notification } from "../../type";
import { getUserAvatar } from "../../API/index";

interface ListNotificationsProps {
  notifications: Notification[];
  totalRecords: number;
  currentPage: number;
  markAsRead: (id: string) => void;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const ListNotifications: React.FC<ListNotificationsProps> = ({
  notifications,
  totalRecords,
  currentPage,
  markAsRead,
  handlePageChange,
}) => {
  const [avatarUrls, setAvatarUrls] = useState<{
    [key: string]: string | null;
  }>({});

  useEffect(() => {
    const fetchAvatars = async () => {
      const avatarPromises = notifications.map(async (notification) => {
        try {
          const avatarUrl = await getUserAvatar(notification.createdUserId);
          return { [notification.id]: avatarUrl || null };
        } catch (error) {
          console.error("Error fetching avatar:", error);
          return { [notification.id]: null };
        }
      });

      const avatarResults = await Promise.all(avatarPromises);
      const avatarMap = avatarResults.reduce(
        (acc, cur) => ({ ...acc, ...cur }),
        {}
      );
      setAvatarUrls(avatarMap);
    };

    fetchAvatars();
  }, [notifications]);

  const totalPages = Math.ceil(totalRecords / 10);

  return (
    <div className="notification">
      <div className="notification-box">
        <ul className="notification-list">
          {notifications.map((notification) => (
            <Notifications
              key={notification.id}
              notification={notification}
              markAsRead={markAsRead}
              avatarUrl={avatarUrls[notification.id]}
            />
          ))}
        </ul>
        <div className="btn-pagination flex flex-end">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default ListNotifications;
