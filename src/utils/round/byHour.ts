export const byHour: DateTransformer = (date) => {
  const roundedDate = new Date(date);
  roundedDate.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
  roundedDate.setMinutes(0, 0, 0);
  return roundedDate;
};
