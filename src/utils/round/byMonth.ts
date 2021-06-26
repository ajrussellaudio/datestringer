function daysInMonth(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}

export const byMonth: DateTransformer = (date) => {
  const roundedDate = new Date(date);
  const newMonth = date.getMonth() + Math.round(date.getDate() / daysInMonth(date));
  roundedDate.setMonth(newMonth, 1);
  roundedDate.setHours(0, 0, 0, 0);
  return roundedDate;
};
