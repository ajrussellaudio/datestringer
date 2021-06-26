export const byWeek: DateTransformer = (date) => {
  const roundedDate = new Date(date);
  const daysToNearestSunday = Math.round(date.getDay() / 7) * 7 - date.getDay();
  roundedDate.setDate(date.getDate() + daysToNearestSunday);
  roundedDate.setHours(0, 0, 0, 0);
  return roundedDate;
};
