import Errors from '../Errors';

export function checkParams(req, res, next) {
  try {
    checkVar1();
    checkVar2();
    checkVar3();
    next();
  } catch (error) {
    res.json(Errors.json(error));
  }
}
