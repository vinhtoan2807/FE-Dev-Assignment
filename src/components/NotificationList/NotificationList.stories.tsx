import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListNotifications from "./NotificationList";
import { mockNotificationList } from "../../mocks/data/notification/notificationList.mocks";

const meta: Meta<typeof ListNotifications> = {
  title: "Components/NotificationList",
  component: ListNotifications,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="page-home">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ListNotifications>;

export const Default: Story = {
  args: {
    notifications: mockNotificationList.data,
    currentPage: 1,
    markAsRead: (id: string) => {
      console.log("Mark as read:", id);
    },
    handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => {
      console.log("Page change:", page);
    },
  },
};
