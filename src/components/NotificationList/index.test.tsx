import { render, screen, fireEvent } from "@testing-library/react";
import ListNotifications from "./index";
import { mockNotificationList } from "../../mocks/data/notification/notificationList.mocks";

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
    render(<ListNotifications />);
    const notificationListItems = screen.getAllByRole("listitem");
    expect(notificationListItems).toHaveLength(
      mockNotificationList.data.length
    );
  });

  it("renders pagination correctly", () => {
    render(<ListNotifications />);
    const paginationElement = screen.getByRole("navigation");
    expect(paginationElement).toBeInTheDocument();
  });

  it("handles page change correctly", () => {
    render(<ListNotifications />);
    const paginationButton = screen.getByRole("button", {
      name: "Go to page 2",
    });
    fireEvent.click(paginationButton);
    expect(paginationButton).toHaveAttribute("aria-current", "page");
  });
});
