const bcryptjs = require('bcryptjs');

module.exports = {
  /**
   *
   * @param {string} password
   * @returns Promise<string>
   */
  hashPassword: async (password) => {
    return await bcryptjs.hash(password, 10);
  },
  /**
   *
   * @param {string} checkingPassword
   * @param {string} hashPassword
   * @returns Promise<boolean>
   */
  isMatchPassword: async (checkingPassword, hashPassword) => {
    return await bcryptjs.compare(checkingPassword, hashPassword);
  },
};

