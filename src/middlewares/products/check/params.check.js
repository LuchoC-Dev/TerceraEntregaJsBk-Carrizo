import Errors from '../../Errors.js';

function checkParams(req, res, next) {
  try {
    const { id } = req.params;
    if (!id) {
      next();
      return;
    }
    const hasValidParams = check(id);
    if (!hasValidParams) {
      throw new Error('Invalid params');
    }
    next();
    return;
  } catch (error) {
    res.json(Errors.json(error));
  }
}

function check(id) {
  return checkId(id);
}

function checkId(id) {
  const regObjectId = /^[0-9a-fA-F]{24}$/;
  return regObjectId.test(id);
}

export default checkParams;
