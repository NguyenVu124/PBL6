const getDates = (startDate, endDate) => {
  const dates = [];
  let currentDate = startDate;
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
};

const checkDatesValid = (checkIn, checkOut, availables) => {
  const dates = getDates(
    new Date(Number(checkIn[0]), Number(checkIn[1]), Number(checkIn[2])),
    new Date(Number(checkOut[0]), Number(checkOut[1]), Number(checkOut[2]))
  );
  dates.forEach((date) => {
    availables.forEach((available) => {
      if (date.toISOString.substring(0, 10) === available.toISOString.substring(0, 10)) {
        return true;
      }
    });
  });
  return false;
};

module.exports = checkDatesValid;
