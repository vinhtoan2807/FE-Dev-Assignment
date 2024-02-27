import { Meta, StoryObj } from "@storybook/react";
import NotificationList from "./index";
import { mockNotificationList } from "../../mocks/data/notification/notificationList.mocks";
const meta: Meta<typeof NotificationList> = {
  title: "Components/NotificationList",
  component: NotificationList,
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
type Story = StoryObj<typeof NotificationList>;

export const Default: Story = {
  args: {
    notificationList: {
      ...mockNotificationList,
    },
  },
};
