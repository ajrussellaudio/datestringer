export const byYear: DateTransformer = (date) => {
  const roundedDate = new Date(date);
  roundedDate.setFullYear(date.getFullYear() + Math.round(date.getMonth() / 12));
  roundedDate.setMonth(0, 1);
  roundedDate.setHours(0, 0, 0, 0);
  return roundedDate;
};
