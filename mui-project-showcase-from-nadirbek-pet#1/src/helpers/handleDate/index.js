import 'moment/locale/ru';
import moment from 'moment';

moment.locale('ruRU');

export default (date) => moment(date).format('DD MMM YYYY');
