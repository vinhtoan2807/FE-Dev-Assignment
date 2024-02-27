import { rest } from "msw";
import { mockNotificationList } from "../data/notification/notificationList.mocks";
export const getNotificationHandler = () => {
  rest.get(
    "/dev-api.lovicogroup.com/api/v1/notifications ",
    (req, res, ctx) => {
      return res(ctx.json(mockNotificationList));
    }
  );
};
