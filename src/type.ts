export interface Notification {
  id: string;
  isRead: boolean;
  payload: Payload;
  userId: string;
  ticketId: string | null;
  createdUserId: string;
  createdAt?: string;
  avatarUrl?: string;
}

export interface NotificationResponse {
  data: Notification[];
  hasNextPage: boolean;
  totalRecords: number;
}

export interface PayloadData {
  inviteUser?: {
    id: string;
    name: string;
    userCode: string;
  };
  removeUser?: {
    id: string;
    name: string;
    userCode: string;
  };
  assigningUser?: {
    id: string;
    name: string;
    userCode: string;
  };
  ticket?: {
    id: string;
    title: string;
    ticketCode: string;
  };
  project?: {
    id: string;
    name: string;
    projectCode: string;
  };
}

export interface Payload {
  data: PayloadData;
  type: NotificationType;
  version?: string | null;
}

export enum NotificationType {
  USER_INVITED_TO_PROJECT = "USER_INVITED_TO_PROJECT",
  USER_REMOVED_FROM_PROJECT = "USER_REMOVED_FROM_PROJECT",
  USER_MENTIONED_IN_TICKET = "USER_MENTIONED_IN_TICKET",
  USER_MENTIONED_IN_COMMENT = "USER_MENTIONED_IN_COMMENT",
  USER_ASSIGNED_TO_TICKET = "USER_ASSIGNED_TO_TICKET",
  USER_OWN_TICKET = "USER_OWN_TICKET",
}
