module.exports = {
  countDate: (startDate, endDate) => {
    const start_time = new Date(startDate).getTime();
    const end_time = new Date(endDate).getTime();

    // Calculate the difference in milliseconds
    const count = end_time - start_time;

    // Convert milliseconds to days
    const days = Math.floor(count / (1000 * 60 * 60 * 24));

    return days > 0 ? days + 1 : 1;
  },

  getDate: (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString();
  },
};
