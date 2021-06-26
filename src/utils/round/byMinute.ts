export const byMinute: DateTransformer = (date) => {
  const roundedDate = new Date(date);
  roundedDate.setMinutes(date.getMinutes() + Math.round(date.getSeconds() / 60));
  roundedDate.setSeconds(0, 0);
  return roundedDate;
};
