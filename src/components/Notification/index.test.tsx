import { render, screen } from "@testing-library/react";
import Notifications from "./index";
import { mockNotification } from "../../mocks/data/notification/notification.mocks";

const mockMarkAsRead = jest.fn();

describe("Notifications component", () => {
  it("renders avatarUrl correctly", () => {
    render(
      <Notifications
        notification={mockNotification}
        markAsRead={mockMarkAsRead}
        avatarUrl={mockNotification.avatarUrl || null}
      />
    );
    const avatarElement = screen.getByRole("img", { name: "notification-img" });
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("src", mockNotification.avatarUrl);
  });

  it("renders content correctly", () => {
    render(
      <Notifications
        notification={mockNotification}
        markAsRead={mockMarkAsRead}
        avatarUrl={mockNotification.avatarUrl || null}
      />
    );
    const contentElement = screen.getByText("Project Name");
    expect(contentElement).toBeInTheDocument();
  });
});
