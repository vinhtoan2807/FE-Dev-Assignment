import ListNotifications from "../../components/NotificationList/NotificationList";
import useNotificationListData from "../../hook/useNotificationListData";
const Notification = () => {
  const {
    notifications,
    totalRecords,
    currentPage,
    markAsRead,
    handlePageChange,
  } = useNotificationListData();
  return (
    <ListNotifications
      notifications={notifications}
      totalRecords={totalRecords}
      currentPage={currentPage}
      markAsRead={markAsRead}
      handlePageChange={handlePageChange}
    />
  );
};

export default Notification;
