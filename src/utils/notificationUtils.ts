import { formatDistanceToNow } from "date-fns";
import i18n from "../locales/i18n";
import { vi, enUS } from "date-fns/locale";

export const calculateTimeAgo = (createdAt: string): string => {
  const locale = i18n.language === "vn" ? vi : enUS;
  const timeAgo = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: locale,
  });
  return timeAgo;
};
