export const bySecond: DateTransformer = (date) => {
  const roundedDate = new Date(date);
  roundedDate.setSeconds(date.getSeconds() + Math.round(date.getMilliseconds() / 1000));
  roundedDate.setMilliseconds(0);
  return roundedDate;
};
