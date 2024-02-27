import "./assets/scss/styles.scss";
import Header from "./components/Layout/Header";
import ListNotifications from "./components/NotificationList/index";
import useNotificationListData from "./components/NotificationList/useNotificationListData";

function App() {
  const {
    notifications,
    totalRecords,
    currentPage,
    markAsRead,
    handlePageChange,
  } = useNotificationListData();

  return (
    <div className="page-home">
      <Header />
      <ListNotifications
        notifications={notifications}
        totalRecords={totalRecords}
        currentPage={currentPage}
        markAsRead={markAsRead}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
