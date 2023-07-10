const multer = require('multer');
const memoryStorage = multer.memoryStorage();

/**
 * Create upload file
 * @param {string} field key
 * @param {number} amount max file count
 * @returns
 */
const uploadFileMid = (field, amount) =>
  multer({ storage: memoryStorage }).fields([{ name: field, maxCount: amount }]);

module.exports = uploadFileMid;
