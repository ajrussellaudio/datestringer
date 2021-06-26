export const byDay: DateTransformer = (date) => {
  const roundedDate = new Date(date);
  roundedDate.setDate(date.getDate() + Math.round(date.getHours() / 24));
  roundedDate.setHours(0, 0, 0, 0);
  return roundedDate;
};
