import { Notification, NotificationType } from "../../../type";
export const mockNotification: Notification = {
  id: "1",
  isRead: false,
  createdUserId: "8b281a25-d345-417e-b8e7-42a718b24c12",
  userId: "user345",
  ticketId: "K2",
  createdAt: "2024-02-09T09:03:59.440Z",
  payload: {
    type: NotificationType.USER_INVITED_TO_PROJECT,
    data: {
      inviteUser: {
        id: "user345",
        name: "Vĩnh Toàn",
        userCode: "123ndmsb",
      },
      project: {
        id: "P1",
        name: "Project Name",
        projectCode: "PRJ123",
      },
    },
    version: "v1",
  },
  avatarUrl:
    "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
};
console.log(mockNotification.avatarUrl);
