import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { NotificationType, Payload } from "../../type";

const GetContent: React.FC<{ payload: Payload }> = ({ payload }) => {
  const { t } = useTranslation();
  const CustomTypography = styled(Typography)`
    && {
      color: #333;
      font-size: 16px;
      font-weight: bold;
      display: inline;
    }
  `;

  const renderUserAction = (
    action: string,
    user: string,
    project?: string,
    ticketCode?: string
  ) => {
    return (
      <div>
        <CustomTypography>{user}</CustomTypography> <span>{t(action)}</span>{" "}
        {project && <CustomTypography>{project}</CustomTypography>}
        {ticketCode && <CustomTypography>{ticketCode}</CustomTypography>}
      </div>
    );
  };

  switch (payload.type) {
    case NotificationType.USER_INVITED_TO_PROJECT:
      return renderUserAction(
        "USER_INVITED_TO_PROJECT",
        payload.data?.inviteUser?.name || "",
        payload.data?.project?.name
      );
    case NotificationType.USER_REMOVED_FROM_PROJECT:
      return renderUserAction(
        "USER_REMOVED_FROM_PROJECT",
        payload.data?.removeUser?.name || "",
        payload.data?.project?.name
      );
    case NotificationType.USER_MENTIONED_IN_TICKET:
      return renderUserAction(
        "USER_MENTIONED_IN_TICKET",
        payload.data?.inviteUser?.name || "",
        payload.data?.ticket?.ticketCode
      );
    case NotificationType.USER_MENTIONED_IN_COMMENT:
      return renderUserAction(
        "USER_MENTIONED_IN_COMMENT",
        payload.data?.inviteUser?.name || "",
        payload.data?.ticket?.ticketCode
      );
    case NotificationType.USER_ASSIGNED_TO_TICKET:
      return renderUserAction(
        "USER_ASSIGNED_TO_TICKET",
        payload.data?.assigningUser?.name || "",
        payload.data?.ticket?.ticketCode
      );
    case NotificationType.USER_OWN_TICKET:
      return renderUserAction(
        "USER_OWN_TICKET",
        payload.data?.assigningUser?.name || "",
        payload.data?.ticket?.ticketCode
      );
    default:
      return null;
  }
};

export { GetContent };
