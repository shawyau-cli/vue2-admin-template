import dayjs from 'dayjs';

/**
 * 时间过滤器
 * @param {string | number | Date | Dayjs} date 日期、时间
 * @param {string} formatPattern 格式化格式
 * @returns 返回格式化之后的显示时间
 */
const formatDate = (date, formatPattern = 'YYYY-MM-DD HH:mm:ss') => {
  const dayjsDate = typeof date === 'number' ? dayjs.unix(date) : dayjs(date);
  return dayjsDate.format(formatPattern);
};

export default formatDate;
