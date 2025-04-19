import moment from 'moment';
import { useTranslation } from 'react-i18next';

export const dateToCalendarDate = (date: Date) => {
  const { i18n } = useTranslation();
  moment.locale(i18n.language);
  return moment(date).format('do MMMM YYYY');
};

export const dateToClockTime = (date: Date) => {
  const { i18n } = useTranslation();
  moment.locale(i18n.language);
  return moment(date).format('h:mm a');
};
