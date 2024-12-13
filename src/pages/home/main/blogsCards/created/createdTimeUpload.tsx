import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const createdTimeUpload = (created: string) => {
  dayjs.extend(relativeTime);

  return dayjs(created).isBefore(dayjs().subtract(1, "day"))
    ? dayjs(created).format("HH:mm - DD/MM/YYYY")
    : dayjs(created).fromNow();
};
