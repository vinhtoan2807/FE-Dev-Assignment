import { render, screen, fireEvent } from "@testing-library/react";
import ListNotifications from "./index";
import { mockNotificationList } from "../../mocks/data/notification/notificationList.mocks";

// Mock useNotificationListData hook
jest.mock("../../hooks/useNotificationListData", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    notifications: mockNotificationList.data,
    totalPages: 1,
    currentPage: 1,
    markAsRead: jest.fn(),
    handlePageChange: jest.fn(),
  })),
}));

describe("ListNotifications component", () => {
  it("renders notification list correctly", () => {
    render(
      <ListNotifications
        notifications={mockNotificationList.data}
        totalRecords={mockNotificationList.totalRecords}
        currentPage={1}
        markAsRead={jest.fn()}
        handlePageChange={jest.fn()}
      />
    );
    const notificationListItems = screen.getAllByRole("listitem");
    expect(notificationListItems).toHaveLength(
      mockNotificationList.totalRecords
    );
  });

  it("renders pagination correctly", () => {
    render(
      <ListNotifications
        notifications={mockNotificationList.data}
        totalRecords={mockNotificationList.totalRecords}
        currentPage={1}
        markAsRead={jest.fn()}
        handlePageChange={jest.fn()}
      />
    );
    const paginationElement = screen.getByRole("navigation");
    expect(paginationElement).toBeInTheDocument();
  });

  it("handles page change correctly", () => {
    render(
      <ListNotifications
        notifications={mockNotificationList.data}
        totalRecords={mockNotificationList.totalRecords}
        currentPage={1}
        markAsRead={jest.fn()}
        handlePageChange={jest.fn()}
      />
    );
    const paginationButton = screen.getByRole("button", {
      name: "Go to page 2",
    });
    fireEvent.click(paginationButton);
    expect(paginationButton).toHaveAttribute("aria-current", "page");
  });
});
