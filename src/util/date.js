// 현재 날짜를 초기값으로 주기위한 함수
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
