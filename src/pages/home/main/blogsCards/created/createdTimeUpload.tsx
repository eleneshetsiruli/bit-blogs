import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
import "dayjs/locale/ka";

dayjs.extend(relativeTime);

export const createdTimeUpload = (
  created: string,
  lang: string | undefined,
) => {
  dayjs.locale(lang);

  return dayjs(created).isBefore(dayjs().subtract(1, "day"))
    ? dayjs(created).format("HH:mm - DD/MM/YYYY")
    : dayjs(created).fromNow();
};
