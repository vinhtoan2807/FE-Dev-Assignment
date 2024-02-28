import { render, fireEvent, screen } from "@testing-library/react";
import Notifications from "./index";
import { mockNotification } from "../../mocks/data/notification/notification.mocks";

const mockMarkAsRead = jest.fn();

describe("Notifications Component", () => {
  it("renders avatarUrl correctly", () => {
    const avatarUrl =
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png";
    render(
      <Notifications
        notification={mockNotification}
        markAsRead={mockMarkAsRead}
        avatarUrl={avatarUrl}
      />
    );
    const avatarElement = screen.getByAltText("notification-avatar");
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("src", avatarUrl);
  });

  it("calls markAsRead function when clicked", () => {
    render(
      <Notifications
        notification={mockNotification}
        markAsRead={mockMarkAsRead}
        avatarUrl={null}
      />
    );
    const notificationItem = screen.getByText("Vĩnh Toàn");
    fireEvent.click(notificationItem);
    expect(mockMarkAsRead).toHaveBeenCalledWith(mockNotification.id);
  });
});
