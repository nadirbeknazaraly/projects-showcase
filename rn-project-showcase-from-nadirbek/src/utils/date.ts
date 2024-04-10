import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

export const isValidDate = (value: string | undefined) => {
  return dayjs(value, 'DD.MM.YYYY', true).isValid();
};

export const isValidAge = (value: string | undefined) => {
  const currentDate = dayjs();
  const oldDate = currentDate.subtract(100, 'year');
  const selectedDateObj = dayjs(value, 'DD.MM.YYYY', true);

  return (
    selectedDateObj.isValid() && selectedDateObj.isBetween(oldDate, currentDate)
  );
};
