const moment = require('moment');

module.exports = {
  countDate: (startDate, endDate) => {
    const countDate = moment(endDate).diff(moment(startDate), 'days');
    return countDate > 0 ? countDate + 1 : 1;
  },

  getDate: (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString();
  },
};
