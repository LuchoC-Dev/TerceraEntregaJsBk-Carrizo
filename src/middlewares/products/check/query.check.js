import Errors from '../../Errors.js';

function checkQuery(req, res, next) {
  try {
    const { limit, page, sort, query } = req.query;
    const hasCondition = limit || page || sort || query;
    if (!hasCondition) {
      next();
      return;
    }
    const hasValidConditions = check(limit, page, sort, query);
    if (!hasValidConditions) {
      throw new Error('Invalid conditions');
    }
    req.query.hasCondition = hasCondition;
    next();
    return;
  } catch (error) {
    console.error('checkQuery Error');
    res.json(Errors.json(error));
  }
}

function check(limit, page, sort, query) {
  return isValidLimit(limit) && isValidPage(page) && isValidSort(sort) && isValidQuery(query);
}

function isValidLimit(limit) {
  if (!limit) {
    return true;
  }
  return isIntPositive(limit);
}

function isIntPositive(string) {
  const regNaturalNumber = /^(0|[1-9]\d*)$/;
  const isNaturalNumber = regNaturalNumber.test(string);
  const isZero = parseInt(string) === 0;
  return isNaturalNumber && !isZero;
}

function isValidPage(page) {
  if (!page) {
    return true;
  }
  return isIntPositive(page);
}

function isValidSort(sort) {
  if (!sort) {
    return true;
  }
  const validValues = ['asc', 'desc'];
  return validValues.includes(sort);
}

function isValidQuery(query) {
  if (!query) {
    return true;
  }
  try {
    const object = JSON.parse(query);
    const isObject = typeof object === 'object' && object !== null;
    const isArray = Array.isArray(query);
    return isObject && !isArray;
  } catch (error) {
    return false;
  }
}

export default checkQuery;
