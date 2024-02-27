import React from "react";
import Notifications from "../Notification/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNotificationListData from "../../hooks/useNotificationListData";

const ListNotifications: React.FC = () => {
  const {
    notifications,
    totalPages,
    currentPage,
    markAsRead,
    handlePageChange,
  } = useNotificationListData();

  return (
    <div className="notification">
      <div className="notification-box">
        <ul className="notification-list">
          {notifications.map((notification) => (
            <Notifications
              key={notification.id}
              notification={notification}
              markAsRead={markAsRead}
              avatarUrl={notification.avatarUrl || null}
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
