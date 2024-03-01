import Notifications from "./Notification";
import { Meta, StoryObj } from "@storybook/react";
import { mockNotification } from "../../mocks/data/notification/notification.mocks";

export default {
  title: "Components/Notifications",
  component: Notifications,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="page-home">
        <div className="notification">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta;

const mockMarkAsRead = (id: string) => {
  console.log("Marking notification as read:", id);
};

type Story = StoryObj<typeof Notifications>;

export const Unread: Story = {
  args: {
    notification: {
      ...mockNotification,
    },
    markAsRead: mockMarkAsRead,
    avatarUrl: mockNotification.avatarUrl,
  },
};

export const Read: Story = {
  args: {
    notification: {
      ...mockNotification,
      isRead: true,
    },
    markAsRead: mockMarkAsRead,
    avatarUrl: mockNotification.avatarUrl,
  },
};
