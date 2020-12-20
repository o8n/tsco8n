import dayjs from 'dayjs';

const DayOfWeek = (date:string): string => dayjs(date).format('dddd');

export default DayOfWeek;