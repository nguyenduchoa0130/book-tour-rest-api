/**
 * Convert instance to object
 * @param {any} classInstance
 * @param {string[]} selectFields
 * @returns
 */
const classToObj = (classInstance, selectFields) => {
  const json = classInstance.toJSON();
  return selectFields.reduce((result, field) => {
    result[field] = json[field];
    return result;
  }, {});
};

module.exports = classToObj;

