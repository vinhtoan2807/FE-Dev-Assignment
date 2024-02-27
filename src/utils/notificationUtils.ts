import { formatDistanceToNow } from "date-fns";

export const calculateTimeAgo = (createdAt: string): string => {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  return timeAgo;
};
